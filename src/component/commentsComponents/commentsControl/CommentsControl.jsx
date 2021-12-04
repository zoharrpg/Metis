import React from "react";

import "antd/dist/antd.css";
import { Card } from "react-bootstrap";
import Comments from "../comments/comments";

// Components for displaying comments and type area
const CommentsControl = (props) => (
  <Card>
    <Card.Header>Comments</Card.Header>
    <Card.Body>
      <Comments></Comments>
      <Comments></Comments>
      <Comments></Comments>
      <Comments></Comments>
      <Comments></Comments>
    </Card.Body>
  </Card>
);

export default CommentsControl;
