import React from "react";
import axios from "axios";

import { BASE_URL } from "../../API/config";

import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import Footer from "../../components/footer/footer";
import DrawerAdmin from "../../components/Drawer/Drawer";

import Avatar from "react-avatar";
import { Table } from "reactstrap";

const GymMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    const res = await axios.get(`${BASE_URL}/admin/members`);
    setMembers(res.data.Member);
  };
  return (
    <>
      <DrawerAdmin />
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
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            {members.map((members) => {
              return (
                <tr key={members.id}>
                  <th scope="row">{members.membershipNo}</th>
                  <td>
                    {" "}
                    <Avatar name={members.name} size="40" round={true} />
                  </td>
                  <td>{members.name}</td>
                  <td>{members.email}</td>
                  <td>{members.address}</td>
                  <td>{members.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
};

export default GymMembers;
