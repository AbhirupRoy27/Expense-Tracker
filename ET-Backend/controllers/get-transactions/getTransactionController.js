import { MoneyModel } from '../../model/userDataModel.js'

const getTransactionController = async (req, res) => {
  const { page } = req.query
  const p = Number(page)
  const data = await MoneyModel.find({}, { __v: 0, updatedAt: 0 })
    .skip((p - 1) * 10)
    .limit(10)
  res.json({
    stats: true,
    message: 'The API is working: can get all data',
    data,
  })
}

export default getTransactionController
