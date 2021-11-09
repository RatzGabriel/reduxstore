import React, { useState, useEffect } from 'react';
import Banner from './Elements/Banner/Banner';
import ButtonElement from './Elements/Button/Button';
import FormInput from './Elements/Form/Form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  googleSignInStart,
  signOutUserStart,
  emailSignInStart,
} from '../Redux/User/user.actions';
import { signUpUserStart } from '../Redux/User/user.actions';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function LoginForm({ img, header, buttonText, smallText, registration }) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([]);

  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  const reset = () => {
    setError([]);
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  useEffect(() => {
    if (currentUser) {
      setEmail('');
      setPassword('');
    }
  }, [currentUser]);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({ displayName, email, password, confirmPassword })
    );
    reset();
  };

  return (
    <DivMain>
      <Banner src={img} />
      <H1Header>{header}</H1Header>
      {!currentUser && (
        <div>
          <form onSubmit={onFormSubmit}>
            <FormInput
              label="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormInput
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <ButtonElement type="submit" margin="3em 0em 3em 0em">
              {buttonText}
            </ButtonElement>
            <Ptext onClick={handleGoogleSignIn}>{smallText}</Ptext>
          </form>
        </div>
      )}
      {currentUser && (
        <div>
          Logged In Already{' '}
          <ButtonElement margin="3em 0em 0em 0em" onClick={() => signOut()}>
            Sign Out
          </ButtonElement>
        </div>
      )}
    </DivMain>
  );
}

export default LoginForm;

const Ptext = styled.p`
  font-family: roboto;
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;

const H1Header = styled.h1`
  font-family: Jacques Francois;
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 1.5rem;
`;

const DivMain = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 4em;
`;
