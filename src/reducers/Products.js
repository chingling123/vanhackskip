import { PROD_LOAD_DATA_REQUEST, PROD_LOAD_DATA_SUCCESS } from '../actions/Products'

const initialState = {
    data: [],
    loading: true
}

const products = (state = initialState, action) => {
    switch(action.type){
        case PROD_LOAD_DATA_REQUEST:
            return {
                data: [],
                loading: true
            }
        case PROD_LOAD_DATA_SUCCESS:
            return {
                data: action.products,
                loading: false
            }
        default:
            return state
    }
}

export default products