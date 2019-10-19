import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../redux/reducers';
import sagas from '../redux/sagas';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(function* rootSaga() {
    yield all([...sagas]);
  });

  return store;
};
