import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/UserReducer'

const CheckoutButton = ({ handleClick, isLoggedIn, userId }) => {
    return (
        <div id="checkoutbutton">
            {isLoggedIn ? (
                <div>

                    <div className="bigbutton"><Link to={`/${userId}/checkout`}>          Checkout          </Link></div>
                </div>
            ) : (
                    <div>

                        <div className="bigbutton"><Link to="/checkout">          Checkout as Guest          </Link></div>
                    </div>
                )}

        </div>
    )
}

/**
 * CONTAINER
 */
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

export default connect(mapState, mapDispatch)(CheckoutButton)

/**
 * PROP TYPES
 */
CheckoutButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}
