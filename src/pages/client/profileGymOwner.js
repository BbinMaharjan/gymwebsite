import React from "react";

import axios from "axios";
import { BASE_URL, GymOwnerToken } from "../../API/config";

import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import { UI } from "../../components/profile/profile";

const ProfileGymOwner = (props) => {
  const [gymOwner, setgymOwner] = useState([]);

  const getgymOwner = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/gymowner/gymownerprofile`, {
        headers: { Authorization: `${GymOwnerToken}` },
      });
      setgymOwner(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getgymOwner();
  }, []);
  return (
    <>
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          GymOwner Profile
        </Typography>
        <UI
          image={gymOwner.name}
          id={gymOwner.role}
          name={gymOwner.name}
          email={gymOwner.email}
          mobile={gymOwner.mobile}
        />
      </div>
    </>
  );
};

export default ProfileGymOwner;
