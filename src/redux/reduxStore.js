import {createStore, applyMiddleware} from 'redux';
import pokeReducer from './reducer';

export const store= createStore(pokeReducer)

export default store;