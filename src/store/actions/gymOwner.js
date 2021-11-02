import axios from "axios";
import { BASE_URL, AdminToken } from "../../API/config";

export const LOGIN_GYMOWNER = "LOGIN_GYMOWNER";
export const GET_GYMOWNERS = "GET_GYMOWNERS";
export const GET_GYMMEMBERS = "GET_GYMMEMBERS";

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

const getGymMembers = (gymMembers) => {
  return {
    type: GET_GYMMEMBERS,
    payload: gymMembers,
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

export const getAllGymMembers = (gymMembers) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/members`, {
    headers: { Authorization: `${AdminToken}` },
  });
  gymMembers = response.data.Member;
  // console.log("action", gymMembers);
  dispatch(getGymMembers(gymMembers));
};
