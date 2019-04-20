const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/products', require('./productRoutes'))
router.use('/cart', require('./cartRoutes'))
router.use('/orders', require('./orders'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
