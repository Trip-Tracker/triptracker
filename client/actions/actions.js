import * as types from "../actions/actionTypes.js";

export const addCount = () => {
  return {
    type: types.ADD_COUNT,
    payload: 1,
  };
};


export const updateUsernameEntryAction = (entry) => {
  return {
    type: types.UPDATE_USERNAME_ENTRY,
    payload: entry,
  };
};


export const updatePasswordEntryAction = (entry) => {
  return {
    type: types.UPDATE_PASSWORD_ENTRY,
    payload: entry,
  };
};

export const updateTrip = (entry) => {
  return {
    type: types.CHANGE_TRIP,
    payload: entry,
  };
};