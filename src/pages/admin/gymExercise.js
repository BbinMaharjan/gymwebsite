import React from "react";
import axios from "axios";

import { AdminToken, BASE_URL } from "../../API/config";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import CardViews from "../../components/Card/CardMU";

import Gymimg from "../../image/man.png";
import { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const GymExercise = (props) => {
  const [gymExercise, setGymExercise] = useState([]);

  useEffect(() => {
    getGymExercises();
  }, []);

  const getGymExercises = async () => {
    const res = await axios.get(`${BASE_URL}/admin/gymexercise`, {
      headers: { Authorization: `Bearer ${AdminToken}` },
    });
    setGymExercise(res.data.result);
  };
  console.log(gymExercise);
  return (
    <>
      <DrawerAdmin />
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          Gym Exercises
        </Typography>
        {gymExercise.map((gymExercise) => {
          return (
            <CardViews
              image={Gymimg}
              title={gymExercise.exerciseTitle}
              dec={gymExercise.exerciseDescription}
              addBy={gymExercise.gymOwner.name}
            />
          );
        })}
        <Stack spacing={2} alignItems="center">
          <Pagination count={2} color="secondary" />
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default GymExercise;
