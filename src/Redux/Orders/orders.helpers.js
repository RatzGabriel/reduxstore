import { firestore } from '../../firebase/Utils';

export const handleSaveOrder = (order) => {
  console.log('order1');
  return new Promise((resolve, reject) => {
    console.log('order2');
    firestore
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        console.log('orderError');
        reject(err);
      });
  });
};

export const handleGetUserOrderHistory = (uid) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('orders').orderBy('orderCreatedDate');
    ref = ref.where('orderUserID', '==', uid);

    ref
      .get()
      .then((snap) => {
        const data = [
          ...snap.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            };
          }),
        ];

        resolve({ data });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const handleGetOrder = (orderID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc(orderID)
      .get()
      .then((snap) => {
        if (snap.exists) {
          console.log(snap.data(), 'Order id', orderID);
          resolve({
            ...snap.data(),
            documentID: orderID,
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
