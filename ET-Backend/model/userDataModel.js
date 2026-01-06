import mongoose from 'mongoose'

const userExpenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'others',
    },
  },
  {
    timestamps: true,
  }
)

export const MoneyModel = mongoose.model('amount', userExpenseSchema)
