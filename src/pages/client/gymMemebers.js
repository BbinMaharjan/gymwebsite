import React, { useState } from "react";
import { Typography } from "@mui/material";

import axios from "axios";
import { BASE_URL, GymOwnerToken } from "../../API/config";

import Avatar from "react-avatar";
import { Table, Button, Label, Input } from "reactstrap";
import { Modal } from "react-bootstrap";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useHistory } from "react-router";

const GymMembers = () => {
  const [show, setShow] = useState(false);
  const [member, setMember] = useState({});
  const [address, setaddress] = useState("");
  const [gymMembers, setgymMembers] = useState([]);

  const handleClose = () => setShow(false);

  const history = useHistory();

  const getAllGymMembers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/members`, {
        headers: { Authorization: `${GymOwnerToken}` },
      });
      // console.log(response);
      setgymMembers(response.data.Member);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/members/gymmembers/${id}`,
        {
          headers: { Authorization: `${GymOwnerToken}` },
        }
      );
      console.log(response.data);
      history.push("/gymwoner/gymmembers");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (ids) => {
    setShow(true);
    const gymMember = gymMembers.find((gymMembers) => gymMembers._id === ids);
    setMember(gymMember);
  };
  const handleSave = async (id) => {
    // console.log("data", id, data);
    const data = {
      address,
    };
    const res = await axios.put(
      `${BASE_URL}/members/gymmembers/${id}`,
      { address: data.address },
      {
        headers: { Authorization: `${GymOwnerToken}` },
      }
    );
    console.log({ res });
    history.push("/gymwoner/gymmembers");
  };

  React.useEffect(() => {
    getAllGymMembers();
  }, []);

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
            {gymMembers &&
              gymMembers.map((members) => {
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
                      <Button
                        color="success"
                        onClick={() => {
                          handleUpdate(members._id);
                        }}
                      >
                        Update
                      </Button>{" "}
                      <Button
                        color="danger"
                        onClick={() => {
                          handleDelete(members._id);
                        }}
                      >
                        Delete
                      </Button>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Member</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Label>Address</Label>
          <Input
            bsSize="sm"
            id="address"
            name="address"
            placeholder={member.address}
            type="text"
            value={address}
            onChange={(text) => setaddress(text.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              handleSave(member._id);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GymMembers;
