import { combineReducers } from "redux";
import { productReducer } from "../components/AddProduct/ProductReducer";
import { cartReducer } from "../components/Carts/cartReducers";

console.log('>>>>>In rootReducers');

const rootReducer = combineReducers({
  productStore: productReducer,
  cartStore: cartReducer
});

export default rootReducer;
