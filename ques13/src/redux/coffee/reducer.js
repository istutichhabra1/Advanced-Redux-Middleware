import {
  GET_COFFEE_REQUEST,
  GET_COFFEE_SUCCESS,
  GET_COFFEE_FAILURE
} from "./actionTypes";

const initialState = {
  isLoading: false,
  data: [],
  isError: false
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEE_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_COFFEE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_COFFEE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
