import React, { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
import admin from "../../image/gymsport.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NabBar";
import Footer from "../../components/footer/footer";

import { useDispatch } from "react-redux";
import { addSuperAdminToApi } from "../../store/actions/superAdmin";

const RegisterGymOwner = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const superAdmin = {
      name,
      email,
      password,
      mobile,
      role: "SuperAdmin",
    };
    dispatch(addSuperAdminToApi(superAdmin));
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
          <h4 className="mt-2">Gym Owner Registers</h4>
          <Image src={admin} className="adminpic" roundedCircle />
          <Form onSubmit={handleSubmit}>
            <Label for="Name">Name</Label>
            <Input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(text) => setName(text.target.value)}
              placeholder="Full Name"
            />
            <Label for="Email">Email</Label>
            <Input
              type="email"
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
              value={password}
              onChange={(text) => setPassword(text.target.value)}
              placeholder="password"
            />
            <Label for="Mobile">Mobile</Label>
            <Input
              type="mobile"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={(text) => setMobile(text.target.value)}
              placeholder="984XXXXXXX"
            />
            <Button color="success" style={{ margin: "10px" }}>
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
