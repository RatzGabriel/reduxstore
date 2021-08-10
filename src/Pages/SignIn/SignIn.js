import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import GoogleButton from 'react-google-button';
import {
  googleSignInStart,
  signOutUserStart,
  emailSignInStart,
} from '../../Redux/User/user.actions';
import FormInput from '../../Components/Elements/Form/Form';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signOut = () => {
    dispatch(signOutUserStart());
  };

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
  console.log(currentUser);
  return (
    <MainDiv imgUrl={'/images/Two.jpg'}>
      {!currentUser && (
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

            <button bg={'black'} type="submit" color={'white'}>
              Login
            </button>
            <div>
              <div>
                <GoogleButton onClick={handleGoogleSignIn}>
                  Continue with Google
                </GoogleButton>
              </div>
            </div>
          </Form>
        </MediumDiv>
      )}
      {currentUser && (
        <MediumDiv>
          <h1>You are already logged in with Email : {currentUser.email}</h1>

          <button onClick={() => signOut()}>Sign Out</button>
        </MediumDiv>
      )}
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
  @media (max-width: 962px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 50vw;
  align-items: center;
  justify-content: space-around;
`;
