import * as API from '../utils/api';

export const STORE_LOAD_DATA_REQUEST = 'STORE_LOAD_DATA_REQUEST'
export const STORE_LOAD_DATA_SUCCESS = 'STORE_LOAD_DATA_SUCCESS' 
export const STORE_LOAD_DATA_FAILURE = 'STORE_LOAD_DATA_FAILURE' 

export const loadDataRequest = () => {
    return{
        type: STORE_LOAD_DATA_REQUEST
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: STORE_LOAD_DATA_SUCCESS,
        stores: data,
        failure: false
    }
}

export const getStores = (values) => {
    return dispatch => {
        API.getStores().then((data) => {
            dispatch(loadDataSuccess(data))
        }
    )}
}
