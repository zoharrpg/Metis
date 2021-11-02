import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./contentboard.css";

const ContentBoard = (props) => {
  let [up, setUp] = useState(props.up);
  let [down, setDown] = useState(props.down);
  const clickUp = () => {
    setUp(++up);
  };
  const clickDown = () => {
    setDown(++down);
  };

  return (
    <>
      <Card className="text-center mt-3 shadow">
        <Card.Header as="h5">Is Mark Zuckerberg a human？</Card.Header>
        <Card.Body>
          <Card.Text>Mark Zuckerberg: "I WAS Human"</Card.Text>
          <Card.Img
            src="https://media.giphy.com/media/cPNXOm7ln8HwK7UcbV/giphy.gif?cid=ecf05e47nwc2riha7w8ehrp83jrlvt4tf02xq3neaichs2oi&rid=giphy.gif&ct=g"
            style={{ width: "10rem" }}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" className="mx-2" onClick={clickUp}>
            <i className="fas fa-caret-up" />
            <span> {up}</span>
          </Button>
          <Button variant="danger" onClick={clickDown}>
            <i className="fas fa-caret-down" />
            <span> {down}</span>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContentBoard;
