import axios from "axios";
import { BASE_URL } from "../../API/config";

export const ADD_SUPERADMIN = "ADD_SUPERADMIN";

const addSuperAdmin = (superAdmin) => ({
  type: ADD_SUPERADMIN,
  payload: superAdmin,
});

export const addSuperAdminToApi = (superAdmin) => async (dispatch) => {
  const response = await axios.post(`${BASE_URL}/admin/register`, {
    superAdmin,
  });
  superAdmin = response.data.admin;
  dispatch(addSuperAdmin(superAdmin));
};
