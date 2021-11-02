import React from "react";

import { Typography } from "@mui/material";

import Avatar from "react-avatar";
import { Table, Button } from "reactstrap";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { getAllGymMembers } from "../../store/actions/gymOwner";

const GymMembers = () => {
  const dispatch = useDispatch();
  const gymMembers = useSelector((state) => state.gymOwnersState.gymMembers);
  React.useEffect(() => {
    dispatch(getAllGymMembers());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          All Gym Members
        </Typography>
        <Table striped bordered style={{ marginTop: "10px" }}>
          <thead
            style={{
              background: "green",
              color: "ghostwhite",
              textAlign: "center",
            }}
          >
            <tr>
              <th>Id</th>
              <th>DP</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            {gymMembers.map((members) => {
              return (
                <tr key={members._id}>
                  <th scope="row">{members.membershipNo}</th>
                  <td>
                    {" "}
                    <Avatar name={members.name} size="40" round={true} />
                  </td>
                  <td>{members.name}</td>
                  <td>{members.email}</td>
                  <td>{members.address}</td>
                  <td>{members.mobile}</td>
                  <td>
                    <Button color="success">Update</Button>{" "}
                    <Button color="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Stack spacing={2} alignItems="center">
          <Pagination count={3} color="secondary" />
        </Stack>
      </div>
    </>
  );
};

export default GymMembers;
