import { Router } from 'express'

const inputRouter = Router()

inputRouter.post('/add-money', (req, res, next) => {
  try {
    const { amount } = req.body

    res.json({
      stats: true,
      message: 'The API is working: can add money',
      amount,
    })
  } catch (error) {
    next(error)
  }
})

inputRouter.get('/get-all-detail', (req, res) => {
  res.json({
    stats: true,
    message: 'The API is working: can get all data',
  })
})

inputRouter.get('/', (req, res) => {
  res.json({
    stats: true,
    message: 'The API is working at input',
  })
})

export default inputRouter
