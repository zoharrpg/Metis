import React from "react";
import { Card, Button } from "react-bootstrap";
import "./content.css";

const ContentBoard = (props) => {
  return (
    <>
      <Card className="text-center ">
        <Card.Header as="h5">Is Mark Zuckerberg a human？</Card.Header>
        <Card.Body>
          <Card.Text>Mark Zuckerberg: "I WAS Human"</Card.Text>
          <Card.Img
            src="https://media.giphy.com/media/cPNXOm7ln8HwK7UcbV/giphy.gif?cid=ecf05e47nwc2riha7w8ehrp83jrlvt4tf02xq3neaichs2oi&rid=giphy.gif&ct=g"
            style={{ width: "10rem" }}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" className="mx-2">
            <i className="fas fa-caret-up" />
            <span> 2000</span>
          </Button>
          <Button variant="danger">
            <i className="fas fa-caret-down" />
            <span> 1</span>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContentBoard;
