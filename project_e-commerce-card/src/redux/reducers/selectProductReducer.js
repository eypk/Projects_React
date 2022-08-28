import { ActionTypes } from "../constants/actionTypes";

const initialState = { product: [] };

export const selectProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
