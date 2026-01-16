import { Router } from 'express'
import addMoneyBodyValidator from '../middleware/addMoneyBodyValidator.js'
import addMoneyController from '../controllers/add-money/addMoneyController.js'
import getTransactionController from '../controllers/get-transactions/getTransactionController.js'

import getTotal from '../controllers/get-total/getTotal.js'

const inputRouter = Router()

inputRouter.post('/add-money', addMoneyBodyValidator, addMoneyController)

inputRouter.get('/get-total', getTotal)

inputRouter.get('/get-all-detail', getTransactionController)

inputRouter.get('/', (req, res) => {
  res.json({
    stats: true,
    message: 'The API is working at input',
  })
})

export default inputRouter
