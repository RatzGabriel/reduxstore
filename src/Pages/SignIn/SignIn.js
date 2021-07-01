import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../Redux/User/user.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    if (currentUser) {
      setEmail('');
      setPassword('');
    }
  }, [currentUser]);

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit} action="">
        <h1>Login</h1>
        <FormInput
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></FormInput>
        <FormInput
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></FormInput>
        <div>
          <div>
            <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default SignIn;
