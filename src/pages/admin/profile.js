import React from "react";
import axios from "axios";

import { AdminToken, BASE_URL } from "../../API/config";

import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";
import { UI } from "../../components/profile/profile";

const Profile = (props) => {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    const res = await axios.get(`${BASE_URL}/admin/adminprofile`, {
      headers: { Authorization: `${AdminToken}` },
    });
    setAdmin(res.data.result);
  };
  return (
    <>
      <DrawerAdmin />
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          Admin Profile
        </Typography>
        <UI
          image={admin.name}
          id={admin.role}
          name={admin.name}
          email={admin.email}
          mobile={admin.mobile}
        />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
