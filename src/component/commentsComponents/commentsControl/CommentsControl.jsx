import React from "react";

import "antd/dist/antd.css";
import { Card } from "react-bootstrap";
import Comments from "../comments/comments";

import Editorcomponent from "../editor/editor";

// Components for displaying comments and type area
const CommentsControl = (props) => (
  <Card>
    <Card.Header>Comments</Card.Header>
    <Card.Body>
      <Editorcomponent></Editorcomponent>
    </Card.Body>
  </Card>
);

export default CommentsControl;
