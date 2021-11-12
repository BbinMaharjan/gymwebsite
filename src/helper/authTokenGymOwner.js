export const getTokenGymOwner = () => {
  return sessionStorage.getItem("GymOwner") || null;
};
export const LogoutGymOwner = () => {
  return sessionStorage.removeItem("GymOwner");
};
