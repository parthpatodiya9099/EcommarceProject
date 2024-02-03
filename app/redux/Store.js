import { thunk } from "redux-thunk";
import { rootReducer } from ".";
import { applyMiddleware, createStore } from "redux";


export const store = createStore(rootReducer, applyMiddleware(thunk))