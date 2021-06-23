import React, { useEffect } from 'react';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import { Route } from 'react-router-dom';
import Registration from './Pages/Registration/Registration';
import SignIn from './Pages/SignIn/SignIn';
import { checkUserSession } from './Redux/User/user.actions';
import { useDispatch } from 'react-redux';
import FortgotPassword from './Pages/ForgotPassword/FortgotPassword';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
