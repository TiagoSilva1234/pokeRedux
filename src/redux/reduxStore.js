import {createStore, applyMiddleware} from 'redux';
import pokeReducer from './reducer';

import thunk from 'redux-thunk'

export const store= createStore(pokeReducer,applyMiddleware(thunk));

export default store;