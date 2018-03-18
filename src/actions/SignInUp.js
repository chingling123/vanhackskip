import * as API from '../utils/api';

export const SIGN_LOAD_DATA_REQUEST = 'SIGN_LOAD_DATA_REQUEST'
export const SIGN_LOAD_DATA_SUCCESS = 'SIGN_LOAD_DATA_SUCCESS' 
export const SIGN_LOAD_DATA_FAILURE = 'SIGN_LOAD_DATA_FAILURE' 
export const SIGN_OUT_DATA_FAILURE = 'SIGN_OUT_DATA_FAILURE' 

export const loadDataRequest = () => {
    return{
        type: SIGN_LOAD_DATA_REQUEST
    }
}

export const logout = () => {
    return{
        type:SIGN_OUT_DATA_FAILURE,
        token: null
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: SIGN_LOAD_DATA_SUCCESS,
        token: data
    }
}

export const createCustomer = (values) => {
    return dispatch => {
        API.createCustomer(values).then((data) => {
            dispatch(loadDataSuccess(data))
        }
    )}
}

export const authCustomer = (values) => {
    return dispatch => {
        API.authCustomer(values).then((data) => {
            dispatch(loadDataSuccess(data))
        })
    }
}
