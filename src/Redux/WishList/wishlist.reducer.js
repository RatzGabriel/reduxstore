import wlTypes from './wishlist.types';
import {
  handleAddToWl,
  handleReduceWlItem,
  handleRemoveWlItem,
} from './wishlist.utils';

const INITIAL_STATE = {
  wlItems: [],
};

const wlReducer = (state = INITIAL_STATE, action) => {
  console.log('actionttt', action);
  switch (action.type) {
    case wlTypes.ADD_TO_WL:
      return {
        ...state,
        wlItems: handleAddToWl({
          prevWlItems: state.wlItems,
          nextWlItem: action.payload,
        }),
      };
    case wlTypes.REDUCE_WL_ITEM:
      console.log('REDUCER WL', state.cartItems, action.payload);
      return {
        ...state,
        wlItems: handleReduceWlItem({
          prevWLItems: state.cartItems,
          wlItemToReduce: action.payload,
        }),
      };
    case wlTypes.REMOVE_WL_ITEM:
      return {
        ...state,
        wlItems: handleRemoveWlItem({
          prevWLItems: state.wlItems,
          wlItemToRemove: action.payload,
        }),
      };
    case wlTypes.CLEAR_WL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default wlReducer;
