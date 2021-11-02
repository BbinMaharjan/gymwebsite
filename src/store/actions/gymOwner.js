import axios from "axios";
import { BASE_URL, AdminToken } from "../../API/config";

export const LOGIN_GYMOWNER = "LOGIN_GYMOWNER";
export const GET_GYMOWNERS = "GET_GYMOWNERS";

const loginGymOwner = (gymOwner) => {
  return {
    type: LOGIN_GYMOWNER,
    payload: gymOwner,
  };
};

const getGymOwners = (gymOwners) => {
  return {
    type: GET_GYMOWNERS,
    payload: gymOwners,
  };
};

export const loginAllGymOwner = (gymOwner) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/users/login`, gymOwner);
  gymOwner = response.data.token;
  if (gymOwner) {
    await localStorage.setItem("token", gymOwner);
    dispatch(loginGymOwner(gymOwner));
  } else {
    alert("user Not Found");
  }
};

export const getAllGymOwners = (gymOwners) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/gymowner/gymownerprofile`, {
    headers: { Authorization: `${AdminToken}` },
  });
  gymOwners = response.data.result;
  dispatch(getGymOwners(gymOwners));
};
