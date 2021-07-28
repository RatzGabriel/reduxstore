import { createSelector } from 'reselect';

export const selectWlData = (state) => state.wlData;

export const selectWlItems = createSelector(
  [selectWlData],
  (wlData) => wlData.wlItems
);

export const selectWlItemsCount = createSelector([selectWlItems], (wlItems) =>
  wlItems.reduce((quantity, wlItem) => quantity + wlItem.quantity, 0)
);

export const selectWlTotal = createSelector([selectWlItems], (wlItems) =>
  wlItems.reduce(
    (quantity, wlItem) => quantity + wlItem.quantity * wlItem.productPrice,
    0
  )
);
