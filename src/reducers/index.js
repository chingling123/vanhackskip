import { combineReducers } from 'redux'
import signinup from './SignInUp'
import stores from './Store'
import products from './Products'
import cart from './Cart'
// import categoriesReducer from './categoriesReducer'
// import postReducer from './postReducer'

export default combineReducers({
    signinup,
    stores,
    products,
    cart
    // postsReducer,
    // categoriesReducer
})