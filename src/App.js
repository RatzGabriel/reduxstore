import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
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
import Footer from './Components/Footer/Footer';

import { checkUserSession } from './Redux/User/user.actions';
import WithAdminAuth from './hoc/withAdminAuth';
import AdminLayout from './Layouts/AdminLayout';
import DashBoardLayout from './Layouts/DashboardLayout';
import Directory from './Components/Directory/Directory';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
});

const App = () => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Directory />} />
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
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wishlist">
          <WishList />
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
      <Footer />
    </div>
  );
};

export default App;
