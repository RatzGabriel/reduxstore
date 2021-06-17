import userTypes from './user.types';

const initialUser = {
  currentUser: null,
};

const userReducer = (state = initialUser, action) => {
  console.log('<<<<>', action.payload);
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
