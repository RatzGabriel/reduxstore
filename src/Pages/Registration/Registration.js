import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../../Components/Elements/Form/Form';
import { signUpUserStart } from '../../Redux/User/user.actions';
import { googleSignInStart } from '../../Redux/User/user.actions';

import styled from 'styled-components';
import Banner from '../../Components/Elements/Banner/Banner';
import ButtonElement from '../../Components/Elements/Button/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
});

function Registration({ darkmode }) {
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
    <MainDiv darkmode={darkmode} imgUrl={'/images/Two.jpg'}>
      <MediumDiv>
        <Banner src="/images/banner1.jpeg" />
        <Form onSubmit={handleFormSubmit}>
          <H1Header>Registration</H1Header>
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
          <ButtonElement margin="2em 0em 2em 0em">Submit</ButtonElement>

          <H1ErrorMessage>{userErr}</H1ErrorMessage>
        </Form>
        <Ptext onClick={() => signIn()}>Or Sign In With Google</Ptext>
      </MediumDiv>
    </MainDiv>
  );
}

export default Registration;

const H1ErrorMessage = styled.h1`
  color: red;
`;

const H1Header = styled.h1`
  font-family: Jacques Francois;
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 1.5rem;
`;

const MainDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  padding-top: 4em;
`;

const MediumDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Ptext = styled.p`
  font-family: roboto;
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
`;
