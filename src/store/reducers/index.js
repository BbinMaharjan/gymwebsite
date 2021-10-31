import { combineReducers } from "redux";
import superAdminReducer from "./superAdmin";

const reducers = combineReducers({
  superAdminsState: superAdminReducer,
});

export default reducers;
