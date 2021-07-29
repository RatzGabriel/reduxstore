import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../../Components/Elements/Form/Form';
import { signUpUserStart } from '../../Redux/User/user.actions';
import { googleSignInStart } from '../../Redux/User/user.actions';

import styled from 'styled-components';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

function Registration() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState([]);

  const { currentUser, userErr } = useSelector(mapState);
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(googleSignInStart());
  };

  useEffect(() => {
    if (currentUser) {
      reset();
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setError(userErr);
    }
  }, [userErr]);

  const reset = () => {
    setError([]);
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      signUpUserStart({ displayName, email, password, confirmPassword })
    );
    reset();
  };

  return (
    <MainDiv imgUrl={'/images/Two.jpg'}>
      <MediumDiv>
        <Form onSubmit={handleFormSubmit}>
          <h1>Registration:</h1>
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

          <button bg={'black'} type="submit" color={'white'} type="submit">
            Submit
          </button>

          {error && <div>{error}</div>}
        </Form>
        <GoogleImg src={'/images/google.png'} onClick={signIn} />
      </MediumDiv>
    </MainDiv>
  );
}

export default Registration;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MediumDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

const GoogleImg = styled.img`
  cursor: pointer;
  height: 2rem;
  margin: 3em 0em;
`;
