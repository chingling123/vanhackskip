import * as API from '../utils/api';

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST'
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS' 
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE' 

export const loadDataRequest = () => {
    return{
        type: LOAD_DATA_REQUEST
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: LOAD_DATA_SUCCESS,
        token: data,
        failure: false
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
