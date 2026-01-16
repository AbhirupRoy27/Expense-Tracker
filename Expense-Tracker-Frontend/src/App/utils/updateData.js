import axios from 'axios'

const updateData = async (input) => {
  try {
    const res = await axios.post(
      'https://expense-tracker-gray-one-54.vercel.app/api/add-money',
      // 'http://localhost:3001/api/add-money'
      input
    )
    if (!res) {
      return alert('Something went wrong')
    }

    alert(res.data.message)
  } catch (error) {
    console.error(error)
  }
}

export default updateData
