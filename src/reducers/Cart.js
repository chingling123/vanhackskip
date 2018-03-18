import { LOAD_CART_DATA, ADD_CART_DATA, REMOVE_CART_DATA} from '../actions/Cart'

const initialState = {
    data: []
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case LOAD_CART_DATA:
            return {
                data: state.data
            }
        case ADD_CART_DATA:
            return {
                data: [...state.data, action.product]
            }
        case REMOVE_CART_DATA:
            return {
                data: [...state.data.filter((c) => c !== action.product)]
            }            
        default:
            return state
    }
}

export default cart