import { createStore, combineReducers } from 'redux';
//Reducers
import results from './reducers/results';
import suggestions from './reducers/suggestions';
import currentItem from './reducers/currentItem';

const reducers = combineReducers({
    results,
    suggestions,
    currentItem
})

const store = createStore(reducers);

export default store;