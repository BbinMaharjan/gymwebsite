import React from "react";

import CardView from "../../components/Card/Card";

import man from "../../image/man.png";
import gymsport from "../../image/gymsport.png";
import treadmill from "../../image/treadmill.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DashboardGymOwner = (props) => {
  return (
    <>
      <Typography variant="h4" align="center">
        {" "}
        Wellcome GymOwner !!
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "461px",
          padding: "5px",
        }}
      >
        <Link
          to="/gymowner/addgymmeber"
          style={{ color: "skyblue", fontWeight: "lighter" }}
        >
          <CardView color="info" image={treadmill} title=" Add Gym Members" />
        </Link>
        <Link
          to="/gymowner/gymmembers"
          style={{ color: "GrayText", fontWeight: "lighter" }}
        >
          <CardView color="success" image={man} title="Gym Members" />
        </Link>
        <Link
          to="/gymowner/profile"
          style={{ color: "GrayText", fontWeight: "lighter" }}
        >
          <CardView
            color="secondary"
            image={gymsport}
            title="GymOwner Profile"
          />
        </Link>
      </div>
    </>
  );
};

export default DashboardGymOwner;
