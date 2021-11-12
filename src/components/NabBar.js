import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/" style={{ marginLeft: "10px" }}>
          <FontAwesomeIcon icon={faDumbbell} style={{ marginRight: "5px" }} />
          My Gym
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">
                <NavLink>
                  {" "}
                  <FontAwesomeIcon
                    icon={faHome}
                    style={{ marginRight: "5px" }}
                  />
                  Home
                </NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              style={{ position: "fixed", right: 80 }}
            >
              <DropdownToggle nav caret>
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ marginRight: "5px" }}
                />
                SIGN IN
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/gymowner/login">
                  <DropdownItem>Gym Owner</DropdownItem>
                </Link>
                <DropdownItem>Gym Member</DropdownItem>
                <DropdownItem divider />
                <DropdownItem style={{ backgroundColor: "green" }}>
                  <Link to="/admin/login">
                    <NavLink>Admin</NavLink>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
