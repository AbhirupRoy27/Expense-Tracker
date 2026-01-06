const addMoneyBodyValidator = (req, res, next) => {
  try {
    const body = req.body

    if (!body) {
      return res.json({
        stats: false,
        message: `the API body can't empty`,
      })
    }

    const { amount } = req.body
    if (!amount) {
      return res.json({
        stats: false,
        message: 'the API body must have amount',
      })
    }

    next()
  } catch (error) {
    next(error)
  }
}

export default addMoneyBodyValidator
