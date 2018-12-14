import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import servantApp from '../reducers';

const configureStore = (): Object => {
  const middlewares = [thunk];
  let middleware;
  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(applyMiddleware(...middlewares));
  } else {
    middleware = applyMiddleware(...middlewares);
  }

  const store = createStore(servantApp, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = servantApp;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
