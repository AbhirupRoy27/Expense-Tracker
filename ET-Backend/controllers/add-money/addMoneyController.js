import { MoneyModel } from '../../model/userDataModel.js'

const addMoneyController = async (req, res, next) => {
  try {
    const { amount, category, message } = req.body

    const insertData = {
      amount,
      category: category || 'Others',
      message: message || '',
    }

    const data = await MoneyModel.create(insertData)

    if (!data) {
      return res.json({
        stats: false,
        message: 'failed to add data to DB',
        dataAddded: true,
      })
    }

    res.json({
      stats: true,
      message: 'Data addded to the DB successfully',
      dataAddded: true,
    })
  } catch (error) {
    next(error)
  }
}

export default addMoneyController
