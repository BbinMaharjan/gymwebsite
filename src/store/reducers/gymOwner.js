import { LOGIN_GYMOWNER, GET_GYMOWNERS } from "../actions/gymOwner";

const initialState = {
  gymOwners: [],
  gymOwner: {},
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
    default:
      return state;
  }
};

export default gymOwnerReducer;
