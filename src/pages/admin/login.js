import React from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/NabBar";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
import Dashboard from "./dashboard";

const Login = (props) => {
  return (
    <div>
      <NavBar />
      <div className="form">
        <Form>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="Password"
            placeholder="password"
          />
          <Button
            color="success"
            style={{ margin: "10px" }}
            onClick={() => Dashboard()}
          >
            <a href="/admin/dashboard">LOG IN</a>
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
