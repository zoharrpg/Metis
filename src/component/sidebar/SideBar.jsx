import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return (
    <ListGroup as="ol" numbered className="mt-3 shadow">
      <Link to="/post" className="remove-underline">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start hover-effect"
        >
          <div className="fw-bold">Post a Question</div>
        </ListGroup.Item>
      </Link>
      <Link className="remove-underline">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start hover-effect"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Comments</div>
          </div>
          <Badge variant="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </Link>
    </ListGroup>
  );
};

export default SideBar;
