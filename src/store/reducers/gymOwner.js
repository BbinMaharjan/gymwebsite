import {
  LOGIN_GYMOWNER,
  GET_GYMOWNERS,
  GET_GYMMEMBERS,
  ADD_GYMMEMBER,
} from "../actions/gymOwner";

const initialState = {
  gymOwners: [],
  gymOwner: {},
  gymMembers: [],
  gymMember: [],
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
      return {
        ...state,
        gymMember: action.payload,
      };
    default:
      return state;
  }
};

export default gymOwnerReducer;
