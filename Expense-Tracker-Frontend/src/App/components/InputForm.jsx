import React, { useState } from 'react'
import CategorySelector from './CategorySelector'
import { useDispatch } from 'react-redux'
import { handleAmount } from '../../redux/features/inputSlice'
import updateData from '../utils/updateData'

function InputForm() {
  const [inputs, setInputs] = useState({
    amount: 0,
    category: 'Others',
    message: '',
  })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAmount(inputs))
    updateData(inputs)
    setInputs({
      amount: 0,
      category: 'Others',
      message: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form
      className="py-4 flex gap-2 flex-col"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>Enter Amount</label>
      <input
        type="number"
        placeholder="Amount"
        value={inputs.amount}
        name="amount"
        className="focus:outline-0 bg-white/10 focus:bg-white/20 py-4 px-2 w-full"
        onChange={handleChange}
      />
      <div className="flex gap-3">
        {[50, 100, 200, 500].map((am) => (
          <button
            key={am}
            type="button"
            onClick={() => setInputs({ ...inputs, amount: inputs.amount + am })}
            className="bg-green-500/30 border-green-200 border-2 border-dashed rounded-xl px-4 py-2"
          >
            +{am}
          </button>
        ))}
      </div>
      <CategorySelector value={inputs.category} setInputs={setInputs} />
      <label>Message (optional)</label>
      <input
        type="text"
        placeholder="Grocery, Milk, Pan"
        value={inputs.message}
        name="message"
        className="focus:outline-0 bg-white/10 focus:bg-white/20 py-4 px-2 w-full"
        onChange={handleChange}
      />
      <button
        type="submit"
        className={`py-3 px-10 ${
          inputs.amount <= 0 ? 'bg-gray-500' : 'bg-blue-500'
        } text-xl mt-3 active:scale-95 transition-all duration-300 tracking-wider font-semibold`}
        disabled={inputs.amount <= 0}
      >
        SAVE
      </button>
    </form>
  )
}

export default InputForm
