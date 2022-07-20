import thunk from "redux-thunk";
import { Reducer } from "./Products/reducer";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
const rootReducer = combineReducers({
  products: Reducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
