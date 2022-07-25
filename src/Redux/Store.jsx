import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

export const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export const persistor = persistStore(Store);

Store.subscribe(() => {
  console.log("dispatch", Store.getState());
});
