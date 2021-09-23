import React from "react";
import { Button, Navbar } from "react-bootstrap";
import CusDropdown from "./CusDropdown";

const Header = (props) => {
  return (
    <div className="bg-light">
      <Navbar className="mx-5">
        <Navbar.Brand href="#home">METIS</Navbar.Brand>
        <Navbar.Toggle />
        {/*/TODO add a search bar here*/}

        <Navbar.Collapse className="justify-content-end">
          <CusDropdown />
          <Button variant="link" style={{ color: "black" }}>
            Login
          </Button>
          <Button variant="outline-secondary mx-2">Sign up</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
