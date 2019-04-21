const router = require('express').Router()
const {Cart, Product} = require('../db/models')
const Sequelize = require('sequelize')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      include: [{model: Product}]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const {id, price, stock} = req.body

    let cartItem = await Cart.findOne({
      where: {
        productId: id
      }
    })

    if (cartItem && stock > 1) {
      let quant = cartItem.quantity
      cartItem = await cartItem.update({
        quantity: quant + 1
      })
      res.json(cartItem)
    } else if (stock > 1) {
      res.json(
        await Cart.create({
          quantity: 1,
          pricePerItem: price,
          totalCost: price,
          productId: id
        })
      )
    } else {
      res.send('Item out of Stock!')
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Cart.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
