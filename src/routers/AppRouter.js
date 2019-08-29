import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';

import Header from '../pages/header/Header';
import HomePage from '../pages/home-page/HomePage';
import ShopPage from '../pages/shop-page/ShopPage';
import FavoritesPage from '../pages/favorites-page/FavoritesPage';
import CheckoutPage from '../pages/checkout-page/CheckoutPage';
import AboutPage from '../pages/about-page/AboutPage';
import ConnectPage from '../pages/connect-page/ConnectPage';
import ContactPage from '../pages/contact-page/ContactPage';
import SigninPage from '../pages/signin-page/SigninPage';
import SignupPage from '../pages/signup-page/SignupPage';
import Footer from '../pages/footer/Footer';

import style from './app-router.module.scss';

// *************************** APP ROUTER COMPONENT *************************** //
class AppRouter extends Component {
  unsubscribeFromAuth = null;

  // Handles Log-in | O-Auth
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),     // .data() called to pull data from snapShot object
          })
        });
      } else {
        setCurrentUser(userAuth);   // if not logged in, currentUser: null
      }
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>

        <div className={style.container}>
          <BrowserRouter>
          <div className={style.content}>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/favorites' component={FavoritesPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/connect' component={ConnectPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route exact path='/signin' render={() => (
                this.props.currentUser
                ? (<Redirect to='/' />) : (<SigninPage />)
              )}/>
              <Route exact path='/signin/signup' render={() => (
                this.props.currentUser
                ? (<Redirect to='/' />) : (<SignupPage />)
              )}/>
            </Switch>
          </div>
            <Footer />
          </BrowserRouter>
        </div>

    </div>
    )
  }
};

// REDUX
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);