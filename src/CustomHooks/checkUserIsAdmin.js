import axios from 'axios';

export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  if (userRoles.includes('admin')) return true;

  return false;
};

export const apiInstance = axios.create({
  baseURL: 'https://us-central1-store-clone-2752d.cloudfunctions.net/api',
});
