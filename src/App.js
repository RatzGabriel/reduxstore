import React, { useState, useEffect } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import { Route, Router } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import SignIn from './Pages/SignIn/SignIn';
import { auth, handleUserProfile } from './firebase/Utils';
import { setCurrentUser } from './Redux/User/user.actions';
import { connect, useSelector, useDispatch } from 'react-redux';
import FortgotPassword from './Pages/ForgotPassword/FortgotPassword';

const App = (props) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return setCurrentUser(null);

      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/forgotPassword">
        <FortgotPassword />
      </Route>
    </div>
  );
};

export default App;
