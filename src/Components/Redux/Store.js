import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./ProductData/reducer";
import { reducer as AuthReducer } from "./AuthData/reducer";

const rootReducer = combineReducers({AppReducer, AuthReducer})

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));