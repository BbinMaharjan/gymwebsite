import React, { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
import { Link } from "react-router-dom";
import admin from "../../image/icon.png";
import { Image } from "react-bootstrap";
import NavBar from "../../components/NabBar";
import Footer from "../../components/footer/footer";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { BASE_URL } from "../../API/config";

const GymOwnerLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${BASE_URL}/admin/login`, {
      email,
      password,
    });
    console.log(res);
    if (res.data.token) {
      await localStorage.setItem("token", res.data.token);
      history.push("/admin/dashboard");
    } else {
      alert("User Not Found");
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
          <h4>Log In to GymOwner Dashboard</h4>
          <Image src={admin} className="adminpic" roundedCircle />
          <Form onSubmit={handleSubmit}>
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
            <Button color="success" style={{ margin: "10px" }}>
              L O G I N
            </Button>
          </Form>
          <p>
            Don't have account ? <Link to="/admin/register">Register</Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymOwnerLogin;
