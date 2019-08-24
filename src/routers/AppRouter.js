import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../pages/header/Header';
import HomePage from '../pages/home-page/HomePage';
import SigninPage from '../pages/signin-page/SigninPage';
import SignupPage from '../pages/signup-page/SignupPage';
import Footer from '../pages/footer/Footer';

import style from './app-router.module.scss';

// *************************** APP ROUTER COMPONENT *************************** //
const AppRouter = ({ currentUser }) => {
  useEffect(() => {
    console.log('Component Did Mount');
  }, []);

  return (
    <div>

      <div className={style.container}>
        <BrowserRouter>
        <div className={style.content}>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/signin' render={() => (
              currentUser
              ? (<Redirect to='/' />) : (<SigninPage />)
            )}/>
            <Route exact path='/signin/signup' render={() => (
              currentUser
              ? (<Redirect to='/' />) : (<SignupPage />)
            )}/>
          </Switch>
        </div>
          <Footer />
        </BrowserRouter>
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(AppRouter);