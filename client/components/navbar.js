import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/UserReducer'


const Navbar = ({ handleClick, isLoggedIn, userId }) => {
  return (
    <div>
      {
        isLoggedIn ?
          (
            <nav>
              <div id="leftnav">
                {/* The navbar will show these links after you log in */}
                < Link to="/" > Cloud9</Link >
              </div >

              <div id="rightnav">
                <Link to="/products">Products</Link>
                <Link to={`/${userId}/cart`}>
                  <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
                </Link>
                <Link to={`/${userId}/checkout`}>Checkout</Link>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </div>
            </nav >
          ) : (
            <nav>
              <div id="leftnav">
                {/* The navbar will show these links before you log in */}
                <Link to="/">CLOUD9</Link>
              </div>
              <div id="rightnav">
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart">
                  <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
                </Link>
              </div>
            </nav>
          )

      }
    </div>
  )
}


const mapState = state => {
  return {
    isLoggedIn: !!state.Users.id,
    userId: state.Users.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)


Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
