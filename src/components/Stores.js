import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStores } from '../actions/Stores'

class Stores extends Component{

    componentDidMount(){
        this.props.getStores()
    }

    render(){

        const { stores } = this.props

        return (
            <section className="section-cities">
                <div className="row">
                    <h2>Stores</h2>
                </div>                
                { stores.loading === true ? <div className="row"><p>Loading</p></div> : <ul><div className="row">
                    {stores.data.map((item) => {
                        return (
                            <li key={item.id} className="col span-1-of-4">
                                <div className="city-feature">
                                <Link to={`/Stores/${item.id}/${item.name}`}><strong>{item.name}</strong></Link>
                                </div>  
                                <div className="city-feature">
                                    <p>{item.address}</p>
                                </div>                                                                                                                           
                            </li>
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
        stores: state.stores
    }
}

const maptDispatchToProps = (dispatch) => {
    return{
        getStores: () => dispatch(getStores())
    }
}

export default connect(mapStateToProps,maptDispatchToProps)(Stores)