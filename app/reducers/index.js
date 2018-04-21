import { combineReducers } from 'redux';
import quotesReducer from './quotesReducer'

const allReducers = combineReducers({
    quotesData: quotesReducer
});

export default allReducers;