import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './controllers/DB/connectDB.js'
import inputRouter from './routes/inputRoute.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

// Routes
app.use('/api', inputRouter)

app.get('/', (req, res) => {
  res.json({
    stats: true,
    message: 'The API is working',
  })
})

app.use((err, req, res, next) => {
  console.error(err) // Log the error for the developer
  res.status(500).json({
    stats: false,
    message: 'Server Error: Something went wrong',
    // Only show detailed error in development
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  })
})

app.use((req, res) => {
  res.status(404).json({
    stats: false,
    message: 'Route not found',
  })
})

// Connect to DB and then start server
const dbConnected = await connectDB()

if (dbConnected) {
  app.listen(PORT, () => {
    console.log(`Port(SERVER) at http://localhost:${PORT}`)
  })
} else {
  console.error('Database connection failed. Server not started.')
}

export default app
