import React from "react";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import Avatar from "react-avatar";
import { Table } from "reactstrap";

const GymOwner = (props) => {
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
            <tr>
              <th scope="row">1</th>
              <td>
                {" "}
                <Avatar name="Leon Hart" size="40" round={true} />
              </td>
              <td>Leon Hart</td>
              <td>leon@gmail.com</td>
              <td>kirtipur</td>
              <td>9843221133</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
};

export default GymOwner;
