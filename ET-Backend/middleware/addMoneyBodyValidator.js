const addMoneyBodyValidator = (req, res, next) => {
  try {
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
