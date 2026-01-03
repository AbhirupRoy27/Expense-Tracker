import React from 'react'

function TopBar() {
  return (
    <div className="flex justify-between py-3 px-2 ">
      <div className="flex items-center gap-2">
        <img
          src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1767480373/ET_Logo_okcik3.png"
          width={50}
        />
        <h1 className="text-2xl">Expense Tracker</h1>
      </div>
    </div>
  )
}

export default TopBar
