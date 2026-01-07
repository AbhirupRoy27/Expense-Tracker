import { MoneyModel } from '../../model/userDataModel.js'

const getTransactionController = async (req, res) => {
  const data = await MoneyModel.find({}, { __v: 0, updatedAt: 0 }).limit(10)
  res.json({
    stats: true,
    message: 'The API is working: can get all data',
    data,
  })
}

export default getTransactionController
