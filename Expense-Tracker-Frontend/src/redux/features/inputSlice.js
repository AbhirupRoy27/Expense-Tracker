import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
  name: 'inputs',
  initialState: {
    amount: Number(localStorage.getItem('total')) || 0,
    category: 'Others',
    message: '',
  },
  reducers: {
    handleAmount: (state, action) => {
      state.amount += Number(action.payload.amount)
      state.category = action.payload.category
      state.message = action.payload.message
      localStorage.setItem('total', Number(state.amount))
    },
    resetAmount: (state) => {
      state.amount = 0
    },
    clearInputs: (state) => {
      state.amount = 0
      state.category = 'Others'
      state.message = ''
    },
  },
})

export const { handleAmount, clearInputs, resetAmount } = inputSlice.actions
export default inputSlice.reducer
