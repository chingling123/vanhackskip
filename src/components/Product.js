import React from 'react'
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline'
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove'
import NumberFormat from 'react-number-format'

const Product = (props) => {
    const { data } = props
    return(
    <li className="col span-1-of-4">
            <div className="city-feature">
                <strong>Item: {data.name}</strong>
            </div>  
            <div className="city-feature">
                <p>Description: {data.description}</p>
            </div>                 
            <div className="city-feature">
                <p>Price: <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p><MdAddCircleOutline onClick={() => props.addToCart(data)} style={{cursor: 'pointer'}} /> <MdHighlightRemove onClick={() => props.removeToCart(data)} style={{cursor: 'pointer'}} /> 
            </div>  
            <div className="city-feature">
                &nbsp;
            </div>                                                                                                                                          
        </li>
    )
}

export default Product