import { combineReducers } from "redux";

import historyReducer from "./historyCourse";
import auth from "./auth";

export default combineReducers({
  history: historyReducer,
  auth: auth
});
