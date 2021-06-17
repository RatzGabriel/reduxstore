import React, { useState, useEffect } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import SignIn from './Pages/SignIn/SignIn';
import { auth, handleUserProfile } from './firebase/Utils';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (!userAuth) setCurrentUser(null);
      setCurrentUser(userAuth);
    });
    return;
  }, []);

  useEffect(() => {
    handleUserProfile(currentUser);
  }, [currentUser]);

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

export default App;
