import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'

class Cart extends Component {
    render(){
        const { cart } = this.props
        console.log(this.props)
        return(
            <div>
                <Link to="/Checkout">{cart.data.length > 0 && 'Checkout'}&nbsp;{cart.data.length}<MdShoppingCart /></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)