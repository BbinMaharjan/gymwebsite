import React from "react";

import { Typography } from "@mui/material";

import { UI } from "../../components/profile/profile";
import { useDispatch, useSelector } from "react-redux";
import { getAllGymOwners } from "../../store/actions/gymOwner";

const ProfileGymOwner = (props) => {
  const dispatch = useDispatch();
  const gymOnwer = useSelector((state) => state.gymOwnersState.gymOwners);
  React.useEffect(() => {
    dispatch(getAllGymOwners());
  }, [dispatch]);
  return (
    <>
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
    </>
  );
};

export default ProfileGymOwner;
