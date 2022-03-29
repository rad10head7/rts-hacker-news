import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";

const middleware = [thunk];

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
