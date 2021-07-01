import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { checkUserIsAdmin } from './checkUserIsAdmin';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function useAdminAuth() {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      history.push('/');
    }
  }, [currentUser]);

  return currentUser;
}

export default useAdminAuth;
