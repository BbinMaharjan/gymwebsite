import React, { useState } from "react";
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup,
  FormFeedback,
} from "reactstrap";
import "./login.css";
import { Link } from "react-router-dom";
import admin from "../../image/gymsport.png";
import { Image } from "react-bootstrap";
import NavBar from "../../components/NabBar";
import Footer from "../../components/footer/footer";

const GymOwnerLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
                placeholder="Email"
                valid
              />
              {email === "leon@gmail.com" ? (
                <FormFeedback valid>Email is available</FormFeedback>
              ) : (
                <FormFeedback valid style={{ color: "red" }}>
                  Email Not is available
                </FormFeedback>
              )}
            </FormGroup>
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
            Don't have account ? <Link to="/gymowner/register">Register</Link>{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymOwnerLogin;
