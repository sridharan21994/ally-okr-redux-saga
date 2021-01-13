import { createStore, applyMiddleware } from 'redux';
import OkrApp from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(OkrApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store
