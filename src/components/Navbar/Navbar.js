import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Drawer from "../Drawer/Drawer";

const NavbarAdmin = (props) => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <Drawer />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Admin</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarAdmin;
