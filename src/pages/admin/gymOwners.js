import React from "react";
import axios from "axios";

import { BASE_URL, AdminToken } from "../../API/config";

import { Typography } from "@mui/material";

import DrawerAdmin from "../../components/Drawer/Drawer";
import Footer from "../../components/footer/footer";

import Avatar from "react-avatar";
import { Table, Button, Label, Input, Form } from "reactstrap";
import { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Modal } from "react-bootstrap";
import { useHistory } from "react-router";

const GymOwner = (props) => {
  const [gymOwner, setGymOwner] = useState([]);
  const [address, setaddress] = useState("");
  const [show, setShow] = useState(false);
  const [gymOwnerId, setgymOwnerId] = useState({});

  const history = useHistory();
  const handleClose = () => setShow(false);

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
  const openModal = (id) => {
    setShow(true);
    const gymOneOwner = gymOwner.find((gymOwner) => gymOwner._id === id);
    setgymOwnerId(gymOneOwner);
  };
  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/admin/gymowners/updategymowner/${id}`,
        { gymLocation: address },
        {
          headers: { Authorization: `${AdminToken}` },
        }
      );
      console.log(res);
      history.push("/admin/gymowners");
    } catch (error) {
      console.log(error);
    }
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
                    <Button
                      color="info"
                      onClick={() => {
                        openModal(gymOwner._id);
                      }}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Stack spacing={2} alignItems="center">
          <Pagination count={2} color="secondary" />
        </Stack>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update GymOwner</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={() => {
            handleUpdate(gymOwnerId._id);
          }}
        >
          <Modal.Body>
            <Label>Address</Label>
            <Input
              bsSize="sm"
              id="address"
              name="address"
              placeholder={gymOwnerId.gymLocation}
              type="text"
              value={address}
              onChange={(text) => setaddress(text.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Footer />
    </>
  );
};

export default GymOwner;
