import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../pages/header/Header';
import HomePage from '../pages/home-page/HomePage';
import Footer from '../pages/footer/Footer';

import style from './app-router.module.scss';

// *************************** APP ROUTER COMPONENT *************************** //
const AppRouter = () => {
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
          </Switch>
        </div>
          <Footer />
        </BrowserRouter>
      </div>

    </div>
  )
};

export default AppRouter;