import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootSaga from "../rootSaga";
import rootReducer from "../rootReducer";

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true
});

const bindMiddleware = middleware => applyMiddleware(...middleware, logger);

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();
  return store;
};

const initialStore = configureStore();

export default initialStore;
