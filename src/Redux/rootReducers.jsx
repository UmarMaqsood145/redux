import { combineReducers } from "redux";
import signUpReducer from "./Reducer";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "Store",
  storage: AsyncStorage,
  whitelist: ["signUpReducer"],
};

const rootReducer = combineReducers({
  signUpReducer: signUpReducer,
});

export default persistReducer(persistConfig, rootReducer);
