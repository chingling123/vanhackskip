import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeToCart, loadToCart } from '../actions/Cart'
import Product from './Product'

class Checkout extends Component {

    componentDidMount(){
        this.props.loadToCart()
    }

    render(){
        const { cart } = this.props
        return(
            <section className="section-cities">
                <h2>Checkout</h2>
                <section className="section-cities">   
                <ul><div className="row">
                    {cart.data.map((item) => {
                        return (
                            <Product key={item.id} data={item} addToCart={this.props.addToCart} removeToCart={this.props.removeToCart} />
                        )
                    })}
                    </div>
                </ul>
                </section>
                <div className="row">
                    <div className="col span-1-of-3">
                        {cart.data.length > 0 && <button className="btn btn-full">Order</button>}
                        
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const maptDispatchToProps = (dispatch) => {
    return{
        loadToCart: () => dispatch(loadToCart()),
        addToCart: (data) => dispatch(addToCart(data)),
        removeToCart: (data) => dispatch(removeToCart(data))
    }
}

export default connect(mapStateToProps,maptDispatchToProps)(Checkout)