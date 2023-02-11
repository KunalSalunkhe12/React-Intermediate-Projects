import { fetchProductsReducer, fetchDetailsReducer } from "./productReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allProducts: fetchProductsReducer,
    productDetail: fetchDetailsReducer
})

export default reducers