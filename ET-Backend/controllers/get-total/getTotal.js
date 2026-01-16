import { MoneyModel } from '../../model/userDataModel.js'

const getTotal = async (req, res) => {
  try {
    const date = {
      month: 11,
      year: new Date().getFullYear(),
    }
    // console.log(String(date.month).split('T')[0])
    const startDate = new Date(`${date.year}-${date.month + 1}-01`)
    let endDate
    if (date.month > 10) {
      endDate = new Date(`${date.year + 1}-01-01`)
    } else {
      endDate = new Date(`${date.year}-${date.month + 2}-01`)
    }

    const result = await MoneyModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: startDate,
            $lt: endDate,
          },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
        },
      },
    ])

    return res.json({
      status: true,
      message: 'This is working!!',
      result,
    })
  } catch (error) {
    next(error)
  }
}

export default getTotal
