import React, { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NabBar";
import Footer from "../../components/footer/footer";

import axios from "axios";
import { BASE_URL } from "../../API/config";

const RegisterGymOwner = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState();
  const [gymTitle, setgymTitle] = useState("");
  const [gymLocation, setgymLocation] = useState("");
  const [image, setImage] = useState();

  // console.log(image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gymOwner = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      gymTitle: gymTitle,
      gymLocation: gymLocation,
      image: image,
    };
    try {
      const response = await axios.post(
        `${BASE_URL}/gymowner/register`,
        gymOwner
      );
      console.log(response);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <NavBar />
      <div className="screen">
        <div className="screenleft">
          <Image
            src="https://t3.ftcdn.net/jpg/01/14/40/14/360_F_114401420_yN5sJ20f0wk8xuCLn6qBGS9gjEwvSZNG.jpg"
            className="image"
            rounded
          />
        </div>
        <div className="screenright">
          <h5 className="mt-3">Gym Owner Registers</h5>
          <Form onSubmit={handleSubmit}>
            <Label for="Name">Name</Label>
            <Input
              valid
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(text) => setName(text.target.value)}
              placeholder="Full Name"
              bsSize="sm"
            />
            <Label for="Email">Email</Label>
            <Input
              type="email"
              bsSize="sm"
              name="email"
              id="email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              placeholder="Email"
            />
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              bsSize="sm"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
              placeholder="password"
            />
            <Label for="Mobile">Mobile</Label>
            <Input
              type="text"
              name="mobile"
              id="mobile"
              bsSize="sm"
              value={mobile}
              onChange={(text) => setMobile(text.target.value)}
              placeholder="984XXXXXXX"
            />
            <Label for="GymTitle">Gym Title</Label>
            <Input
              type="text"
              name="gymTitle"
              id="gymTitle"
              bsSize="sm"
              value={gymTitle}
              onChange={(text) => setgymTitle(text.target.value)}
              placeholder="Gym Title"
            />
            <Label for="gymLocation">Gym Location</Label>
            <Input
              type="gymLocation"
              name="gymLocation"
              id="gymLocation"
              bsSize="sm"
              value={gymLocation}
              onChange={(text) => setgymLocation(text.target.value)}
              placeholder="Gym Location"
            />
            <Label for="Image">Image</Label>
            <Input
              type="file"
              name="file"
              bsSize="sm"
              id="file"
              onChange={(event) => setImage(event.target.files[0])}
              placeholder="Eg : jpg , png "
            />
            <Button color="success" style={{ margin: "10px" }} size="sm">
              Register
            </Button>
          </Form>
          <p>
            Have Account? <Link to="/gymowner/login">Log In</Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterGymOwner;
