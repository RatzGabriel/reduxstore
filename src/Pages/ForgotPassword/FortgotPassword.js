import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import FormInput from '../../Components/Elements/Form/Form';
import {
  resetPasswordStart,
  resetUserState,
} from '../../Redux/User/user.actions';

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr,
});

function FortgotPassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const { resetPasswordSuccess, userErr } = useSelector(mapState);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      console.log(history);
    }
  }, [resetPasswordSuccess]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FormInput
          type="email"
          label="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Send Email with Password</button>
        {errors.length > 0 && <div>{errors}</div>}
      </form>
    </div>
  );
}

export default FortgotPassword;
