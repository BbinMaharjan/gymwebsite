import React from "react";
import axios from "axios";

import { BASE_URL, AdminToken } from "../../API/config";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import Avatar from "react-avatar";
import { Table, Button, Form, Label, Input } from "reactstrap";
import { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Modal } from "react-bootstrap";

const GymOwner = (props) => {
  const [gymOwner, setGymOwner] = useState([]);
  const [newgymTitle, setgymTitle] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getGymOwners();
  }, []);

  const getGymOwners = async () => {
    const res = await axios.get(`${BASE_URL}/admin/gymowners`, {
      headers: { Authorization: `${AdminToken}` },
    });
    //console.log("get gym owners", res);
    setGymOwner(res.data.result);
  };

  // const handelUpdate = async (id) => {
  //   const res = await axios.put(
  //     `${BASE_URL}/admin/gymowners/updategymowner/${id}`,
  //     { gymTitle: newgymTitle },
  //     {
  //       headers: { Authorization: `${AdminToken}` },
  //     }
  //   );
  //   console.log(res);
  // };

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
              <th>Mobile</th>
              <th>Gym Title</th>
              <th>Gym Location</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            {gymOwner.map((gymOwner) => {
              return (
                <tr key={gymOwner._id}>
                  <th scope="row">{gymOwner.id}</th>
                  <td>
                    {" "}
                    <Avatar name={gymOwner.name} size="40" round={true} />
                  </td>
                  <td>{gymOwner.name}</td>
                  <td>{gymOwner.email}</td>
                  <td>{gymOwner.mobile}</td>
                  <td>{gymOwner.gymTitle}</td>
                  <td>{gymOwner.gymLocation}</td>
                  <td>
                    <Button color="info" onClick={handleShow(gymOwner.id)}>
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Gym Owner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Label for="gymTitle">New Gym Title</Label>
              <Input
                type="gymTitle"
                name="gymTitle"
                id="gymTitle"
                value={newgymTitle}
                onChange={(text) => setgymTitle(text.target.value)}
                placeholder="new"
              />
              <Button color="success" style={{ margin: "10px" }}>
                UPDATE
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Stack spacing={2} alignItems="center">
          <Pagination count={2} color="secondary" />
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default GymOwner;
