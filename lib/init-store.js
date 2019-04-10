import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reduxMulti from 'redux-multi';
import auth from '../components/Login/reducer';
import counter from '../components/Counter/reducer';

const dev = process.env.NODE_ENV !== 'production';

const appReducer = combineReducers({
  auth,
  counter
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

const storeWithMiddleware = initialState => {
  if (dev) {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware, reduxMulti))
    );
  }
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, reduxMulti)
  );
};

export default storeWithMiddleware;
