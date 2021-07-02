import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './Pages/Admin/Admin';
import MainPage from './Pages/MainPage/MainPage';
import Registration from './Pages/Registration/Registration';
import SignIn from './Pages/SignIn/SignIn';
import FortgotPassword from './Pages/ForgotPassword/FortgotPassword';

import Header from './Components/Header/Header';

import { checkUserSession } from './Redux/User/user.actions';
import WithAdminAuth from './hoc/withAdminAuth';
import AdminLayout from './Layouts/AdminLayout';
import Search from './Pages/Search/Search';
import ProductDetails from './Pages/ProductDetails.js/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';
import DashBoardLayout from './Layouts/DashboardLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Order/Order';
import Footer from './Components/Footer/Footer';

import styled from 'styled-components';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const App = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/signIn" render={() => <SignIn />} />
        <Route path="/forgotPassword">
          <FortgotPassword />
        </Route>
        <Route path="/admin">
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route path="/search/:filterType">
          <Search />
        </Route>
        <Route path="/product/:productID">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/payment">
          {currentUser && <Payment></Payment>}
          {!currentUser && <SignIn></SignIn>}
        </Route>
        <Route path="/dashboard">
          {currentUser && (
            <DashBoardLayout>
              <Dashboard />{' '}
            </DashBoardLayout>
          )}
          {!currentUser && <SignIn></SignIn>}
        </Route>
        <Route path="/order/:orderID">
          {currentUser && (
            <DashBoardLayout>
              <Order />
            </DashBoardLayout>
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
