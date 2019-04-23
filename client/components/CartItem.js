import React from 'react'
import {Link} from 'react-router-dom'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = props.cartItem.quantity
  const cartItem = props.cartItem

  if (!product) {
    props.getCartThunk(props.user)
    return <div>Loading...</div>
  }

  return (
    <div id="cartItemDiv">
      <div>
        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} />
        </Link>
      </div>
      <div>
        <p>
          <Link to={`products/${product.id}`}>{product.name}</Link>
        </p>
        <div id="priceQuantDiv">
          <div id="priceDiv">
            <p>Price: ${cartItem.pricePerItem * cartItem.quantity}</p>
          </div>
          <div>
            <p>Quantity: {quantity}</p>
            <button
              type="button"
              onClick={() => {
                props.changeQuant(cartItem.id, 'inc')
              }}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => {
                props.changeQuant(cartItem.id, 'dec')
              }}
            >
              -
            </button>
          </div>
        </div>
        {/*end price quant div*/}
        <button
          type="button"
          onClick={() => {
            props.removeItem(cartItem.id)
          }}
        >
          Delete From Cart
        </button>
      </div>
    </div>
  )
}

export default CartItem
