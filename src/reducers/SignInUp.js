import { SIGN_LOAD_DATA_REQUEST, SIGN_LOAD_DATA_SUCCESS, SIGN_OUT_DATA_FAILURE } from '../actions/SignInUp'

const initialState = {
    data: null,
    loading: false
}

const signInUpReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_LOAD_DATA_REQUEST:
            return {
                loading: true
            }
        case SIGN_LOAD_DATA_SUCCESS:
            return {
                data: action.token
            }
        case SIGN_OUT_DATA_FAILURE:
            return {
                data: action.token
            }
        default:
            return state
    }
}

export default signInUpReducer