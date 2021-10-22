import React from "react";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";
import { UI } from "../../components/profile/profile";
const Profile = (props) => {
  return (
    <>
      <DrawerAdmin />
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          Admin Profile
        </Typography>
        <UI />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
