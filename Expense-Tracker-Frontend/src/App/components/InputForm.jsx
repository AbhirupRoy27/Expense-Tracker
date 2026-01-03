import React from 'react'

function InputForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
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
        className="focus:outline-0 bg-white/10 focus:bg-white/20 py-4 px-2 w-full"
      />
      <label>Message (optional)</label>
      <input
        type="text"
        placeholder="Amount"
        className="focus:outline-0 bg-white/10 focus:bg-white/20 py-4 px-2 w-full"
      />
      <button
        type="submit"
        className="py-2 px-10 bg-blue-500 text-2xl mt-3 active:scale-95 transition-all duration-300"
      >
        Save
      </button>
    </form>
  )
}

export default InputForm
