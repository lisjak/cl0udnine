import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/UserReducer'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = props.cartItem.quantity
  const cartItem = props.cartItem

  if (!product) {
    props.getCartThunk(props.user)
    return <div>Loading...</div>
  }

  return (

    <div id="productgrid">



      <div id="item">

        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} />
        </Link><br />
        <p>
          <div id="productlink"><Link to={`products/${product.id}`}>{product.name}</Link></div>
        </p>
      </div>




      <div id="item">

        <p><b>Item Price:</b> ${cartItem.pricePerItem}</p>

        <p><b>Quantity:</b> {quantity}</p>

        <p><b>Line Price:</b> ${cartItem.pricePerItem * cartItem.quantity}</p>

      </div>


      <div id="item">

        <div id="buttonlist">
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



    </div >

  )
}

export default CartItem
