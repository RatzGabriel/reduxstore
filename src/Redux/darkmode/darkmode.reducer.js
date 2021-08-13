import cartTypes from './darkmode.types';

const INITIAL_STATE = {
  darkmode: 'off',
};

const darkmodeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.CHANGE_DARK_MODE:
      return {
        ...state,
        darkmode: action.payload,
      };
    default:
      return state;
  }
};

export default darkmodeReducer;
