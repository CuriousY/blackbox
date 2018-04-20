import { createStore, combineReducers, applyMiddleWare } from 'redux';

import user from  './reducers/userReducer';

export default createStore(
    combineReducers({
        user
    }),
    {}
)