import React, { useState } from "react";
import { Typography } from "@mui/material";

import Avatar from "react-avatar";
import { Table, Button, Label, Input } from "reactstrap";
import { Modal } from "react-bootstrap";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllGymMembers,
  deletesGymMember,
  updatesGymMember,
} from "../../store/actions/gymOwner";
import { useHistory } from "react-router";

const GymMembers = () => {
  const [show, setShow] = useState(false);
  const [member, setMember] = useState({});
  const [address, setaddress] = useState("");

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const gymMembers = useSelector((state) => state.gymOwnersState.gymMembers);

  const handleDelete = async (id) => {
    dispatch(deletesGymMember(id));
    history.push("/gymwoner/gymmembers");
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
    // const res = await axios.put(
    //   `${BASE_URL}/members/gymmembers/${id}`,
    //   { address: data.address },
    //   {
    //     headers: { Authorization: `${AdminToken}` },
    //   }
    // );
    // console.log({ res });
    dispatch(updatesGymMember(id, data));
    history.push("/gymwoner/gymmembers");
  };

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
