import {
  LOGIN_GYMOWNER,
  GET_GYMOWNERS,
  GET_GYMMEMBERS,
  ADD_GYMMEMBER,
  DELETE_GYMMEMBER,
} from "../actions/gymOwner";

const initialState = {
  gymOwners: [],
  gymOwner: {},
  gymMembers: [],
};

const gymOwnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_GYMOWNER:
      return {
        ...state,
        gymOwner: action.payload,
      };
    case GET_GYMOWNERS:
      return {
        ...state,
        gymOwners: action.payload,
      };
    case GET_GYMMEMBERS:
      return {
        ...state,
        gymMembers: action.payload,
      };
    case ADD_GYMMEMBER:
      const gymMember = [action.payload, ...state.gymMembers];
      return {
        ...state,
        gymMembers: gymMember,
      };
    case DELETE_GYMMEMBER:
      const gymMemberid = [action.payload, ...state.gymMembers];
      return {
        ...state,
        gymMember: gymMemberid,
      };
    default:
      return state;
  }
};

export default gymOwnerReducer;
