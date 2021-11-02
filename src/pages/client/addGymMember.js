import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
const AddGymMemeber = (props) => {
  const [membershipno, setMembershipno] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [sift, setSift] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container ">
        <Typography variant="h4" align="center">
          {" "}
          Add Gym Members
        </Typography>
        <Form className="container" onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="Membershipno" sm={2}>
              Membership No
            </Label>
            <Col sm={2}>
              <Input
                bsSize="sm"
                id="membershipno"
                name="membershipno"
                placeholder="001"
                type="number"
                value={membershipno}
                onChange={(text) => setMembershipno(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Name" sm={2}>
              Name
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="name"
                name="name"
                placeholder="Gym Member Name"
                type="text"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={2}>
              email
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="email"
                name="email"
                placeholder="Eg : member@gmail.com"
                type="email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={2}>
              Address
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="address"
                name="address"
                placeholder="Eg : Kirtipur"
                type="text"
                value={address}
                onChange={(text) => setAddress(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Gender" sm={2}>
              Gender
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="gender"
                name="gender"
                placeholder="Eg : male , female , other"
                type="text"
                value={gender}
                onChange={(text) => setGender(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="dob" sm={2}>
              Date Of Birth
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="dob"
                name="dob"
                placeholder="Eg : 2000/01/01"
                type="text"
                value={dob}
                onChange={(text) => setDob(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Mobile" sm={2}>
              Mobile
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="mobile"
                name="mobile"
                placeholder="Eg : 98XX-XXX-XXX"
                type="text"
                value={mobile}
                onChange={(text) => setMobile(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="joinDate" sm={2}>
              Join Date
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="joinDate"
                name="joinDate"
                placeholder="Eg : 2021/01/01"
                type="text"
                value={joinDate}
                onChange={(text) => setJoinDate(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="sift" sm={2}>
              Sift
            </Label>
            <Col sm={5}>
              <Input
                bsSize="sm"
                id="sift"
                name="sift"
                placeholder="Eg : morning , evening"
                type="text"
                value={sift}
                onChange={(text) => setSift(text.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col
              sm={{
                offset: 2,
                size: 10,
              }}
            >
              <Button color="success">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default AddGymMemeber;
