import React, { useState } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
import Dashboard from "./dashboard";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <div className="form">
        <Form>
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
          <Button
            color="success"
            style={{ margin: "10px" }}
            onClick={() => Dashboard()}
          >
            LOG IN
          </Button>
        </Form>
      </div>
      <Label>
        Register Here <Link to="/admin/register">click here</Link>
      </Label>
    </div>
  );
};

export default Login;
