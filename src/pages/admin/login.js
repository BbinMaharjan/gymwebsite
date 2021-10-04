import React from "react";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/NabBar";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./login.css";

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
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
