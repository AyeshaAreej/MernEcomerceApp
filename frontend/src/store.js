 import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer} from './reducers/productReducers'
// import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'

const reducer = combineReducers({
    products: productsReducer,
//     productDetails: productDetailsReducer,
//     newProduct: newProductReducer,
//     product: productReducer,
//     productReviews: productReviewsReducer,
//     review: reviewReducer,
//     auth: authReducer,
//     user: userReducer,
//     allUsers: allUsersReducer,
//     userDetails: userDetailsReducer,
  
})




const middlware = [thunk];
const store = createStore(reducer,  composeWithDevTools(applyMiddleware(...middlware)))

export default store;