import express from 'express'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())
dotenv.config()

app.get('/', (req, res) => {
  res.json({
    stats: true,
    message: 'The API is working',
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Port(SERVER) at http://localhost:${process.env.PORT || 3000}`)
})

export default app
