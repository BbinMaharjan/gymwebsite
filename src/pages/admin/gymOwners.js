import React from "react";
import axios from "axios";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import Avatar from "react-avatar";
import { Table } from "reactstrap";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BASE_URL = "https://reqres.in/api";

const GymOwner = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(`${BASE_URL}/users?page=1`);
    setUsers(res.data.data);
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
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            {users.map((users) => {
              return (
                <tr key={users.id}>
                  <th scope="row">{users.id}</th>
                  <td>
                    {" "}
                    <Avatar src={users.avatar} size="40" round={true} />
                  </td>
                  <td>{users.first_name}</td>
                  <td>{users.email}</td>
                  <td>{users.email}</td>
                  <td>9843221133</td>
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
