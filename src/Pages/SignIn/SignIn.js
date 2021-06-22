import React, { useState, useEffect } from 'react';
import Button from '../../Components/Elements/Button/Button';
import FormInput from '../../Components/Elements/Form/Form';
import { auth } from '../../firebase/Utils';
import { useHistory, withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser, signInWithGoogle } from '../../Redux/User/user.actions';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { signInSuccess } = useSelector(mapState);

  useEffect(() => {
    console.log('signInsuccess', signInSuccess);
    if (signInSuccess) {
      setEmail('');
      setPassword('');
    }
  }, [signInSuccess]);

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(signInUser({ email, password }));
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
