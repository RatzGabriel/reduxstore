import userTypes from './user.types';

const initialUser = {
  currentUser: null,
  userErr: [],
  resetPasswordSuccess: false,
};

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };

    case userTypes.SET_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        initialUser,
      };
    default:
      return state;
  }
};

export default userReducer;
