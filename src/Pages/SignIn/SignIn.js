import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';

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
    <MainDiv imgUrl={'/images/Two.jpg'}>
      <MediumDiv>
        <Form onSubmit={onFormSubmit} action="">
          <h1>Login:</h1>
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

          <Button bg={'black'} type="submit" color={'white'}>
            Login
          </Button>
          <div>
            <div>
              <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
            </div>
          </div>
        </Form>
      </MediumDiv>
    </MainDiv>
  );
}

export default SignIn;

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
  height: 50vh;
  display: flex;
  flex-direction: column;
  width: 30vw;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 50vw;
  align-items: center;
  justify-content: space-around;
`;
