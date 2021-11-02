import { combineReducers } from "redux";
import superAdminReducer from "./superAdmin";
import gymOwnerReducer from "./gymOwner";

const reducers = combineReducers({
  superAdminsState: superAdminReducer,
  gymOwnersState: gymOwnerReducer,
});

export default reducers;
