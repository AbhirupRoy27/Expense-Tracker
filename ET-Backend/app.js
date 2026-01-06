import express from 'express'
import dotenv from 'dotenv'
import connectDB from './controllers/DB/connectDB.js'
import inputRouter from './routes/inputRoute.js'

const app = express()
app.use(express.json())
dotenv.config()
const res = await connectDB()
if (res) {
  app.use('/api', inputRouter)

  app.get('/', (req, res) => {
    res.json({
      stats: true,
      message: 'The API is working',
    })
  })
}

app.use((err, req, res, next) => {
  res.status(500).json({
    stats: false,
    message: 'Server Error: Something went wrong',
    error: err,
  })
})

app.use((req, res) => {
  res.status(404).json({
    stats: false,
    message: 'Route not found',
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Port(SERVER) at http://localhost:${process.env.PORT || 3000}`)
})

export default app
