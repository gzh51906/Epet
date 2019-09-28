import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonReducer from './common';
import mineReducer from '../pages/Mine/store';

// 引入调试工具模块
// import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
    mine: mineReducer,
    common: commonReducer
});


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;