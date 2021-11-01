import axios from "axios";
import { BASE_URL, AdminToken } from "../../API/config";
export const GET_SUPERADMINS = "GET_SUPERADMINS";

export const ADD_SUPERADMIN = "ADD_SUPERADMIN";

const addSuperAdmin = (superAdmin) => ({
  type: ADD_SUPERADMIN,
  payload: superAdmin,
});

const getSuperAdmins = (superAdmins) => {
  return {
    type: GET_SUPERADMINS,
    payload: superAdmins,
  };
};

export const getAllSuperAdmins = (superAdmins) => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/admin/adminprofile`, {
    headers: { Authorization: `${AdminToken}` },
  });
  //console.log("action", response);
  superAdmins = response.data.result;
  //console.log({ members });
  dispatch(getSuperAdmins(superAdmins));
};

export const addSuperAdminToApi = (superAdmin) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/admin/register`, {
    superAdmin,
  });
  superAdmin = response.data.admin;
  dispatch(addSuperAdmin(superAdmin));
};
