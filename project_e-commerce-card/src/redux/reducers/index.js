import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { selectProductReducer } from "./selectProductReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  selectedProduct: selectProductReducer,
});

export default reducers;
