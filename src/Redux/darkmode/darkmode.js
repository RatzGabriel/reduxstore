import darkModeTypes from './darkmode.types';

export const darkMode = (darkmodeStatus) => ({
  type: darkModeTypes.CHANGE_DARK_MODE,
  payload: darkmodeStatus,
});
