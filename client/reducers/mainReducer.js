import * as types from "../actions/actionTypes.js";

const initialState = {
  usernameEntry: '',
  passwordEntry: '',
  userId: 1,
  userEmail: 'password',
  isSignedIn: false,
  count: 0,
  tripsArray: [],
  currentTrip: null
};


const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT:
      return {
        ...state,
       count: state.count + action.payload
      };
      
    case types.UPDATE_USERNAME_ENTRY:
      return {
        ...state,
        usernameEntry: action.payload, //update on keystroke in text input from SignIn.jsx | (9:41PM, 08/18/21)
      };

    case types.UPDATE_PASSWORD_ENTRY:
      return {
        ...state,
        passwordEntry: action.payload, //update on keystroke in text input from SignIn.jsx | (9:41PM, 08/18/21)
      };
      
    case types.ATTEMPT_SIGN_IN:
      return {
        ...state,
        userId: action.payload.user._id, //POST request to server | (9:28PM, 08/18/21)
        userEmail: action.payload.user.email,
        tripsArray: action.payload.trips,
        isSignedIn: true,
      };
    
    case types.CHANGE_TRIP:
      return {
        ...state,
        currentTrip: action.payload,
      };

    case types.CREATE_TRIP:
      return {
        ...state,
        currentTrip: action.payload,
      }

    case types.FETCH_NEW_TRIP:
      return {
        ...state,
        tripsArray: action.payload,
        currentTrip: null,
      }

    default:
      return state;
  }
};

export default mainReducer;
