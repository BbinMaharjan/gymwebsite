import React from "react";
// import axios from "axios";

// import { AdminToken, BASE_URL } from "../../API/config";

// import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import DrawerGymOwner from "../../components/Drawer/DrawerGymOwner";
import Footer from "../../components/footer/footer";
import { UI } from "../../components/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuperAdmins } from "../../store/actions/superAdmin";

const ProfileGymOwner = (props) => {
  //   const dispatch = useDispatch();
  //   const admin = useSelector((state) => state.superAdminsState.superAdmins);
  //   React.useEffect(() => {
  //     dispatch(getAllSuperAdmins());
  //   }, [dispatch]);

  // const [admin, setAdmin] = useState([]);
  // useEffect(() => {
  //   getAdmin();
  // }, []);

  // const getAdmin = async () => {
  //   const res = await axios.get(`${BASE_URL}/admin/adminprofile`, {
  //     headers: { Authorization: `${AdminToken}` },
  //   });
  //   setAdmin(res.data.result);
  // };
  return (
    <>
      <DrawerGymOwner />
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          GymOwner Profile
        </Typography>
        {/* <UI
          image={admin.name}
          id={admin.role}
          name={admin.name}
          email={admin.email}
          mobile={admin.mobile}
        /> */}
        <UI />
      </div>
      <Footer />
    </>
  );
};

export default ProfileGymOwner;
