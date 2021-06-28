import { useDispatch } from 'react-redux';
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

const App = (props) => {
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
      </Switch>
    </div>
  );
};

export default App;
