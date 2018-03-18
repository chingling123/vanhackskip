import { STORE_LOAD_DATA_REQUEST, STORE_LOAD_DATA_SUCCESS } from '../actions/Stores'

const initialState = {
    data: [],
    loading: true
}

const stores = (state = initialState, action) => {
    switch(action.type){
        case STORE_LOAD_DATA_REQUEST:
            return {
                loading: true
            }
        case STORE_LOAD_DATA_SUCCESS:
            return {
                data: action.stores,
                loading: false
            }
        default:
            return state
    }
}

export default stores