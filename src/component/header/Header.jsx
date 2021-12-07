import React from "react";
import { Button, Navbar } from "react-bootstrap";
import CusDropdown from "./CusDropdown";
import { Link } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import "./header.css";

const Header = (props) => {
  return (
    <div className="bg-light shadow">
      <Navbar className="mx-5">
        <Navbar.Brand href="#home">METIS</Navbar.Brand>
        <Navbar.Toggle />
        {/*/TODO add a search bar here*/}

        <Navbar.Collapse className="justify-content-end">
          {/*<CusDropdown />*/}
          <LoginForm />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
