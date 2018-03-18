import React from 'react'
import Products from './Products'

const Store = (props) => {
    return (
        <section className="section-cities">
            <div className="row">
                <h2>{props.match.params.name}</h2>
            </div>            
            <Products storeId={props.match.params.id}/>
        </section>
    )
}

export default Store