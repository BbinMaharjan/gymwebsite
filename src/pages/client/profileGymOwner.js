import React from "react";
// import axios from "axios";

// import { AdminToken, BASE_URL } from "../../API/config";

// import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import DrawerGymOwner from "../../components/Drawer/DrawerGymOwner";
import Footer from "../../components/footer/footer";
import { UI } from "../../components/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { getAllGymOwners } from "../../store/actions/gymOwner";

const ProfileGymOwner = (props) => {
  const dispatch = useDispatch();
  const gymOnwer = useSelector((state) => state.gymOwnersState.gymOwners);
  React.useEffect(() => {
    dispatch(getAllGymOwners());
  }, [dispatch]);

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
        <UI
          image={gymOnwer.name}
          id={gymOnwer.role}
          name={gymOnwer.name}
          email={gymOnwer.email}
          mobile={gymOnwer.mobile}
        />
      </div>
      <Footer />
    </>
  );
};

export default ProfileGymOwner;
