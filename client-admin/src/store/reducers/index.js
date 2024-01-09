import { combineReducers } from "redux";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

const rootReducers = combineReducers({
    products: productReducer,
    categories: categoryReducer
})

export default rootReducers