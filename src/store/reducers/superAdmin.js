import { ADD_SUPERADMIN, GET_SUPERADMINS } from "../actions/superAdmin";

const initialState = {
  superAdmins: [],
};

const superAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUPERADMIN:
      return {
        ...state,
        superAdmins: action.payload,
      };
    case GET_SUPERADMINS:
      return {
        ...state,
        superAdmins: action.payload,
      };
    default:
      return state;
  }
};
export default superAdminReducer;
