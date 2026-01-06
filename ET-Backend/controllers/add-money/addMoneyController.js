import { MoneyModel } from '../../model/userDataModel.js'

const addMoneyController = async (req, res, next) => {
  try {
    const { amount } = req.body

    const data = await MoneyModel.create({ amount })

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
