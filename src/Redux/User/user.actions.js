import { auth, handleUserProfile, GoogleProvider } from '../../firebase/Utils';
import userTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({ type: userTypes.SET_SIGN_IN_SUCCESS, payload: true });
    } catch (err) {
      // console.log(err);
    }
  };

export const signUpUser =
  ({ password, confirmPassword, displayName, email }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: ['passwords dont match'],
      });
      return;
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await handleUserProfile(user, { displayName });
        dispatch({ type: userTypes.SIGN_UP_SUCCESS, payload: true });
      } catch (error) {
        // console.log(error);
      }
    }
  };

export const signOutUserStart = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: userTypes.SIGN_OUT_USER_SUCCESS, payload: null });
  } catch (err) {
    // console.log(err);
  }
};

export const resetPassword =
  ({ email }) =>
  async (dispatch) => {
    const config = {
      url: 'http://localhost:3000/login',
    };
    try {
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() =>
          dispatch({ type: userTypes.RESET_PASSWORD_SUCCESS, payload: true })
        );
    } catch (err) {
      // console.log(err);
      const error = ['Email not found'];
      dispatch({ type: userTypes.RESET_PASSWORD_ERROR, payload: error });
    }
  };

export const signInWithGoogle = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(GoogleProvider).then(() => {
      dispatch({ type: userTypes.SIGN_UP_SUCCESS, payload: true });
    });
  } catch (err) {
    // console.log(err);
  }
};
