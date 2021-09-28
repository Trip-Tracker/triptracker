import * as types from "../actions/actionTypes.js";

const initialState = {
  count: 0,
};


const mainReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.ADD_COUNT:
      return {
        ...state,
       count: state.count +action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
