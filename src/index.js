import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';

const jsx = (
  <Provider store={store}>

    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>

  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

