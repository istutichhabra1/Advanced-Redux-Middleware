import axios from "axios";
import {
  GET_COFFEE_REQUEST,
  GET_COFFEE_SUCCESS,
  GET_COFFEE_FAILURE
} from "./actionTypes";

export const getCoffees = (sort = "") => async (dispatch) => {
  dispatch({ type: GET_COFFEE_REQUEST });

  try {
    const res = await axios.get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=${sort}&order=asc`
    );
    dispatch({ type: GET_COFFEE_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: GET_COFFEE_FAILURE });
  }
};
