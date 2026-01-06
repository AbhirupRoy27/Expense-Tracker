const options = [
  { id: 1, option: 'Daily Expense' },
  { id: 2, option: 'Mangrove' },
  { id: 3, option: 'Reliance' },
]

function CategorySelector({ value, setInputs }) {
  const handleChange = (e) => {
    const { name, value } = e.target

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <select
      className="py-4 px-2 my-1 bg-white/10 focus:bg-white/20 focus:outline-0"
      onChange={handleChange}
      value={value}
      name="category"
    >
      {options.map((opt) => (
        <option key={opt.id}>{opt.option}</option>
      ))}
      <option defaultValue={'Others'}>Others</option>
    </select>
  )
}

export default CategorySelector
