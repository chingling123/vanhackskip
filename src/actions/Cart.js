export const LOAD_CART_DATA = 'LOAD_CART_DATA'
export const ADD_CART_DATA = 'ADD_CART_DATA' 
export const REMOVE_CART_DATA = 'REMOVE_CART_DATA' 


export const loadToCart = () => {
    return {
        type: LOAD_CART_DATA,
    }
}

export const addToCart = (data) => {
    return {
        type: ADD_CART_DATA,
        product: data
    }
}

export const removeToCart = (data) => {
    return {
        type: REMOVE_CART_DATA,
        product: data
    }
}