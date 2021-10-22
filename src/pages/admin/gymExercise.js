import React from "react";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import Avatar from "react-avatar";
import { Table } from "reactstrap";
import CardViews from "../../components/Card/CardMU";

import Gymimg from "../../image/man.png";

const GymExercise = (props) => {
  return (
    <>
      <DrawerAdmin />
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          Gym Exercises
        </Typography>
        <Table striped bordered style={{ marginTop: "10px" }}>
          <thead
            style={{
              background: "#ad1753",
              color: "ghostwhite",
              textAlign: "center",
            }}
          >
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Exercises Title</th>
              <th>Description</th>
              <th>Added By</th>
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            <tr>
              <th scope="row">1</th>
              <td>
                {" "}
                <Avatar name="Chest" size="40" round={true} />
              </td>
              <td>Chest</td>
              <td>Incline Dumbbell Bench Press</td>
              <td>Leon Maharjan</td>
            </tr>
          </tbody>
        </Table>
        <CardViews
          image={Gymimg}
          title="Chest"
          dec=" Incline Dumbell Bench Press"
        />
        <CardViews
          image={Gymimg}
          title="Chest"
          dec=" Incline Dumbell Bench Press"
        />
      </div>
      <Footer />
    </>
  );
};

export default GymExercise;
