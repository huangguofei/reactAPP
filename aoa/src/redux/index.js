import {combineReducers, createStore} from "redux";
import app from './modules/app';
import login from './modules/login';
import product from './modules/product';

const rootReducer = combineReducers({
    app,
    login,
    product,
});


export default createStore(rootReducer);