import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import { resetPassword } from '../../Redux/User/user.actions';

const mapState = ({ user }) => ({
  resetPasswordError: user.resetPasswordError,
  resetPasswordSuccess: user.resetPasswordSuccess,
});

function FortgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const { resetPasswordError, resetPasswordSuccess } = useSelector(mapState);

  useEffect(() => {
    if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
      setErrors(resetPasswordError);
    }
  }, [resetPasswordError]);

  useEffect(() => {
    setErrors([]);
    setEmail('');
  }, [resetPasswordSuccess]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPassword({ email }));
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
        <Button type="submit">Send Email with Password</Button>
        {errors.length > 0 && <div>{errors}</div>}
      </form>
    </div>
  );
}

export default FortgotPassword;
