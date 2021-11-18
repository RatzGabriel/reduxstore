import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Admin from './Pages/Admin/Admin';
import Cart from './Pages/Cart/Cart';
import Dashboard from './Pages/Dashboard/Dashboard';
import FortgotPassword from './Pages/ForgotPassword/FortgotPassword';
import Order from './Pages/Order/Order';
import Registration from './Pages/Registration/Registration';
import Search from './Pages/Search/Search';
import SignIn from './Pages/SignIn/SignIn';
import Payment from './Pages/Payment/Payment';
import ProductDetails from './Pages/ProductDetails.js/ProductDetails';

//Components
import Header from './Components/Header/Header';
import WishList from './Components/Wishlist/WishList';

import { checkUserSession } from './Redux/User/user.actions';
import WithAdminAuth from './hoc/withAdminAuth';
import AdminLayout from './Layouts/AdminLayout';
import DashBoardLayout from './Layouts/DashboardLayout';
import Directory from './Components/Directory/Directory';
import ProductResults from './Components/ProductsResults/ProductsResults';
import About from './Components/About/About';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const App = () => {
  const { currentUser } = useSelector(mapState);
  const [darkmode, setDarkmode] = useState(false);
  const dispatch = useDispatch();

  const setDarkmodeOnApp = () => {
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Header setDarkmodeOnApp={setDarkmodeOnApp} dm={darkmode} />
      <Switch>
        <Route exact path="/" render={() => <Directory dm={darkmode} />} />
        <Route
          path="/registration"
          render={() => <Registration darkmode={darkmode} />}
        />
        <Route path="/signIn" render={() => <SignIn darkmode={darkmode} />} />
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
          <ProductResults dm={darkmode} />
        </Route>
        <Route path="/search/:filterType">
          <Search />
        </Route>
        <Route path="/product/:productID">
          <ProductDetails dm={darkmode} />
        </Route>
        <Route path="/cart">
          <Cart dm={darkmode} />
        </Route>
        <Route path="/wishlist">
          <WishList dm={darkmode} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/payment">
          {currentUser && <Payment dm={darkmode}></Payment>}
          {!currentUser && <SignIn dm={darkmode}></SignIn>}
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
