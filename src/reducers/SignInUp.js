import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE} from '../actions/SignInUp'

const initialState = {
    token: '',
    loading: false
}

const signInUpReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_DATA_REQUEST:
            return {
                loading: true
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default signInUpReducer