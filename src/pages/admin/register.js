
import React,{useState} from "react";
import { Button, Form, Label, Input } from "reactstrap";
import "./login.css";
const RegisterAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="form">
      <h1>RegisterAdmin</h1>
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
        <Button color="success" style={{ margin: "10px" }}>
          LOG IN
        </Button>
      </Form>
    </div>
  );
};

export default RegisterAdmin;
