import * as API from '../utils/api';

export const PROD_LOAD_DATA_REQUEST = 'PROD_LOAD_DATA_REQUEST'
export const PROD_LOAD_DATA_SUCCESS = 'PROD_LOAD_DATA_SUCCESS' 
export const PROD_LOAD_DATA_FAILURE = 'PROD_LOAD_DATA_FAILURE' 

export const loadDataRequest = () => {
    return{
        type: PROD_LOAD_DATA_REQUEST
    }
}

export const loadDataSuccess = (data) => {
    return {
        type: PROD_LOAD_DATA_SUCCESS,
        products: data
    }
}

export const getProducts = (value) => {
    return dispatch => {
        API.getProducts(value).then((data) => {
            dispatch(loadDataSuccess(data))
        }
    )}
}
