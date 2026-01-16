import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
  name: 'inputs',
  initialState: {
    amount: 0,
    category: 'Others',
    message: '',
  },
  reducers: {
    handleAmount: (state, action) => {
      state.amount += Number(action.payload.amount)
      state.category = action.payload.category
      state.message = action.payload.message
    },
    updateTotal: (state, { payload }) => {
      state.amount = payload
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

export const { handleAmount, clearInputs, resetAmount, updateTotal } =
  inputSlice.actions
export default inputSlice.reducer
