import React from "react";
import axios from "axios";

import { AdminToken, BASE_URL, API_ROOT } from "../../API/config";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import Avatar from "react-avatar";
import { Table } from "reactstrap";
import { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const GymOwner = (props) => {
  const [gymOwner, setGymOwner] = useState([]);

  useEffect(() => {
    getGymOwners();
  }, []);

  const getGymOwners = async () => {
    const res = await axios.get(`${BASE_URL}/admin/gymowners`, {
      headers: { Authorization: `Bearer ${AdminToken}` },
    });
    setGymOwner(res.data.result);
  };
  return (
    <>
      <DrawerAdmin />
      <div className="container">
        <Typography variant="h4" align="center">
          {" "}
          Gym Owners
        </Typography>
        <Table striped bordered style={{ marginTop: "10px" }}>
          <thead
            style={{
              background: "gray",
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
              <th>Gym Title</th>
              <th>Gym Location</th>
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            {gymOwner.map((gymOwner) => {
              return (
                <tr key={gymOwner.id}>
                  <th scope="row">{gymOwner.id}</th>
                  <td>
                    {" "}
                    <Avatar
                      src={`${API_ROOT}/public/images/gymowner/${gymOwner.image}`}
                      size="40"
                      round={true}
                    />
                  </td>
                  <td>{gymOwner.name}</td>
                  <td>{gymOwner.email}</td>
                  <td>{gymOwner.email}</td>
                  <td>{gymOwner.mobile}</td>
                  <td>{gymOwner.gymTitle}</td>
                  <td>{gymOwner.gymLocation}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Stack spacing={2} alignItems="center">
          <Pagination count={2} color="secondary" />
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default GymOwner;
