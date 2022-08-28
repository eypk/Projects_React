import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  selectedProduct: [],
};

export const selectProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };
    default:
      return state;
  }
};
