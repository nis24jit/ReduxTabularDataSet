import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import griddata from './griddata';

const rootReducer = combineReducers({griddata,routing: routerReducer });

export default rootReducer;
