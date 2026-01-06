import { Router } from 'express'
import addMoneyBodyValidator from '../middleware/addMoneyBodyValidator.js'
import addMoneyController from '../controllers/add-money/addMoneyController.js'

const inputRouter = Router()

inputRouter.post('/add-money', addMoneyBodyValidator, addMoneyController)

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
