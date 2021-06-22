import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import { signUpUser } from '../../Redux/User/user.actions';

const mapState = ({ user }) => ({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.SIGN_UP_ERROR,
});

function Registration() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([]);

  const { signUpSuccess, signUpError } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signUpSuccess) {
      reset();
    }
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setError(signUpError);
    }
  }, [signUpError]);

  const reset = () => {
    setError([]);
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpUser({ displayName, email, password, confirmPassword }));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          onChange={(e) => setDisplayName(e.target.value)}
          label="DisplayName"
          type="text"
          value={displayName}
        />
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          value={email}
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          value={password}
        />
        <FormInput
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="ConfirmPassword"
          type="password"
          value={confirmPassword}
        />
        <Button type="submit">Form Submit</Button>

        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Registration;
