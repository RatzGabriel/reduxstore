import wlTypes from '../WishList/wishlist.types';

export const addToWL = (nextWlItem) => ({
  type: wlTypes.ADD_TO_WL,
  payload: nextWlItem,
});

export const removeWlItem = (wlItem) => ({
  type: wlTypes.REMOVE_WL_ITEM,
  payload: wlItem,
});

export const clearWL = () => ({
  type: wlTypes.CLEAR_WL,
});
