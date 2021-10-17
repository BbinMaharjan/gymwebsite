import React, { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
import admin from "../../image/icon.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NabBar";
import Footer from "../../components/footer/footer";

const RegisterAdmin = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
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
          <h4>Admin Registers</h4>
          <Image src={admin} className="adminpic" roundedCircle />
          <Form>
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
            Have Account? <Link to="/admin/login">Log In</Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterAdmin;
