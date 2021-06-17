import React, { useState, useEffect } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import SignIn from './Pages/SignIn/SignIn';
import { auth, handleUserProfile } from './firebase/Utils';
import { setCurrentUser } from './Redux/User/user.actions';
import { connect } from 'react-redux';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (!userAuth) return setCurrentUser(null);
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return;
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/signIn">
        <SignIn currentUser={currentUser} />
      </Route>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = ({ user }) => ({
  setCurrentUser: (user) => dispatchEvent(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
