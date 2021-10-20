import React from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import Avater from "../../components/Avatar";
import { BASE_URL } from "../../API/config";

import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import Footer from "../../components/footer/footer";
import DrawerAdmin from "../../components/Drawer/Drawer";

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
        {members.map((members) => {
          return (
            <Card key={members._id} className="mt-3">
              <Avater name={members.name} style={{ marginleft: "10px" }} />
              <CardBody style={{ textAlign: "center" }}>
                <CardTitle tag="h5"> {members.name} </CardTitle>
                <CardText>
                  {" "}
                  <label tag="h2" style={{ marginRight: "5px" }}>
                    Email:
                  </label>
                  {members.email}
                </CardText>
                <CardText>
                  {" "}
                  <label tag="h2" style={{ marginRight: "5px" }}>
                    Address:
                  </label>
                  {members.address}
                </CardText>
              </CardBody>
              <Button color="primary">View Profile</Button>
            </Card>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default GymMembers;
