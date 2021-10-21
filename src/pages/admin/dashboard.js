import React from "react";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";
import CardView from "../../components/Card/Card";

import man from "../../image/man.png";
import gymsport from "../../image/gymsport.png";
import people from "../../image/people.png";
import treadmill from "../../image/treadmill.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <>
      <DrawerAdmin />
      <Typography variant="h4" align="center">
        {" "}
        Wellcome Admin !!
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
          to="/admin/gymowners"
          style={{ color: "skyblue", fontWeight: "lighter" }}
        >
          <CardView color="info" image={treadmill} title=" Gym  Owners" />
        </Link>
        <Link
          to="/admin/gymmembers"
          style={{ color: "GrayText", fontWeight: "lighter" }}
        >
          <CardView color="success" image={man} title="Gym Members" />
        </Link>
        <Link
          to="/admin/gymexercises"
          style={{ color: "GrayText", fontWeight: "lighter" }}
        >
          <CardView color="danger" image={people} title="Gym Exercises" />
        </Link>
        <CardView color="secondary" image={gymsport} title="Gym Settings" />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
