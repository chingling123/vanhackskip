import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/Products'
import { addToCart, removeToCart } from '../actions/Cart'
import Product from './Product'

class Products extends Component{

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
      }

    componentDidMount(){
        this.props.getProducts(this.props.storeId)
    }

    render(){

        const { products } = this.props


        return (
            <section className="section-cities">   
                { products.loading === true ? <div className="row"><p>Loading</p></div> : <ul><div className="row">
                    {products.data.map((item) => {
                        return (
                            <Product key={item.id}  data={item} addToCart={this.props.addToCart} removeToCart={this.props.removeToCart} />
                        )
                    })}
                    </div>
                    </ul>
                }
            </section>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const maptDispatchToProps = (dispatch) => {
    return{
        getProducts: (value) => dispatch(getProducts(value)),
        addToCart: (data) => dispatch(addToCart(data)),
        removeToCart: (data) => dispatch(removeToCart(data))
    }
}

export default connect(mapStateToProps,maptDispatchToProps)(Products)