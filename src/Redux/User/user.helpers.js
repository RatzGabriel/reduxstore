import { auth } from '../../firebase/Utils';

export const handleResetPasswordAPI = (email) => {
  const config = {
    // change this later to live environment
    url: 'http://localhost:3000/login',
  };
  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ['Email not found. Please try again'];
        reject(err);
      });
  });
};
