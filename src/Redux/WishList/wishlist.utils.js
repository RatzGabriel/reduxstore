export const existingWlItem = ({ prevWlItems, nextWlItem }) => {
  return prevWlItems.find(
    (wlItem) => wlItem.documentID === nextWlItem.documentID
  );
};

export const handleAddToWl = ({ prevWlItems, nextWlItem }) => {
  const quantityIncrement = 1;
  const wlItemExists = existingWlItem({ prevWlItems, nextWlItem });

  if (wlItemExists) {
    return prevWlItems.map((wlItem) =>
      wlItem.documentID === nextWlItem.documentID
        ? {
            ...wlItem,
            quantity: wlItem.quantity + quantityIncrement,
            favorite: true,
          }
        : wlItem
    );
  }

  return [
    ...prevWlItems,
    {
      ...nextWlItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveWlItem = ({ prevWLItems, wlItemToRemove }) => {
  return prevWLItems.filter((item) => item.documentID !== wlItemToRemove);
};

export const handleReduceWlItem = ({ prevWlItems, wlItemToReduce }) => {
  const existingWlItem = prevWlItems.find(
    (wlItem) => wlItem.documentID === wlItemToReduce.documentID
  );

  if (existingWlItem.quantity === 1) {
    return prevWlItems.filter(
      (wlItem) => wlItem.documentID !== existingWlItem.documentID
    );
  }

  return prevWlItems.map((wlItem) =>
    wlItem.documentID === existingWlItem.documentID
      ? {
          ...wlItem,
          quantity: wlItem.quantity - 1,
        }
      : wlItem
  );
};
