import React from "react";
import { Dropdown } from "react-bootstrap";

const CusDropdown = (props) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          <i className="fas fa-user" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          /TODO finish up the dropdown menu
          <Dropdown.Item href="#/action-1"></Dropdown.Item>
          <Dropdown.Item href="#/action-2"></Dropdown.Item>
          <Dropdown.Item href="#/action-3"></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CusDropdown;
