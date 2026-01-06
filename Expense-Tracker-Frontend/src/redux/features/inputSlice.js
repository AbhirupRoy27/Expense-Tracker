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
      state.amount = action.payload
    },

    clearInputs: (state) => {
      state.amount = 0
      state.category = 'Others'
      state.message = ''
    },
  },
})

export const { handleAmount, clearInputs } = inputSlice.actions
export default inputSlice.reducer
