import axios from 'axios'
import { updateTotal } from '../../redux/features/inputSlice'

export const getTotal = async (dispatch) => {
  try {
    const res = await axios(
      // 'http://localhost:3001/api/get-total'
      'https://expense-tracker-gray-one-54.vercel.app/api/get-total'
    )
    const totalAmount = res.data?.result[0]?.totalAmount || 0
    dispatch(updateTotal(totalAmount))
  } catch (error) {
    console.warn(error)
  }
}
