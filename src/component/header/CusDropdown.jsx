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
          <Dropdown.Item href="#/action-1">
            <div>
              <i className="fas fa-info-circle mr-2" />
              Help Central
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CusDropdown;
