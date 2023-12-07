import { legacy_createStore as createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'

import cakeReducer from './cakes/CakeReduce';
const store=createStore(cakeReducer)
export default store;

