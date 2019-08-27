import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [logger];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));





// WITH REDUX PERSIST
// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [logger];

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
// export const persistor = persistStore(store);