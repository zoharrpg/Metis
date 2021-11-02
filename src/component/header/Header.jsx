import React from "react";
import { Button, Navbar } from "react-bootstrap";
import CusDropdown from "./CusDropdown";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  return (
    <div className="bg-light shadow">
      <Navbar className="mx-5">
        <Navbar.Brand href="#home">METIS</Navbar.Brand>
        <Navbar.Toggle />
        {/*/TODO add a search bar here*/}

        <Navbar.Collapse className="justify-content-end">
          <CusDropdown />
          {/*TODO change this to link when login page finished */}
          <Button variant="link" style={{ color: "black" }}>
            <Link to="/login"> Login</Link>
          </Button>
          {/*TODO change this to link when sign up page finished */}
          <Button variant="outline-secondary mx-2">Sign up</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
