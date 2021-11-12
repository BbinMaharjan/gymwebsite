import { getToken } from "../helper/authToken";
import { getTokenGymOwner } from "../helper/authTokenGymOwner";

export const BASE_URL = "http://localhost:8080/gymapi";

export const AdminToken = `Bearer ${getToken()}`;

export const API_ROOT = "http://localhost:8080";

export const GymOwnerToken = `Bearer ${getTokenGymOwner()}`;
