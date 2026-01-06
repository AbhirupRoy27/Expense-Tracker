import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './features/inputSlice'

const store = configureStore({
  reducer: {
    input: inputReducer,
  },
})

export default store
