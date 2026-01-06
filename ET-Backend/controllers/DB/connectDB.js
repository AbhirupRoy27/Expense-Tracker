import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const DB_URI = process.env.DB_URI

    const res = await mongoose.connect(DB_URI)
    if (mongoose.connection.readyState == 1) {
      return 'connected'
    }
  } catch (error) {
    return false
  }
}

export default connectDB
