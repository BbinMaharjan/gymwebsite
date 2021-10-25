export const getToken = () => {
  return localStorage.getItem("token") || null;
};

export const Logout = () => {
  return localStorage.removeItem("token");
};
