import * as types from "../actions/actionTypes.js";

export const addCount = () => {
  return {
    type: types.ADD_COUNT,
    payload: 1,
  };
};
