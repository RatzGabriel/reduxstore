import userTypes from './user.types';

const initialUser = {
  currentUser: null,
  signInSuccess: false,
  SIGN_UP_ERROR: [],
  SIGN_UP_SUCCESS: false,
  resetPasswordSuccess: false,
  resetPasswordError: [],
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.SET_SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        SIGN_UP_ERROR: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        SIGN_UP_SUCCESS: action.payload,
      };
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    case userTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
