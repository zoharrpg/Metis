import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./content.css";

const ContentBoard = (props) => {
  return (
    <>
      <Container
        className="mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card className="text-center " style={{ width: "80rem" }}>
          <Card.Header as="h3">Is Mark Zuckerberg a human？</Card.Header>
          <Card.Body>
            <Card.Text>Mark Zuckerberg: "I WAS Human"</Card.Text>
            <Card.Img
              src="https://media.giphy.com/media/cPNXOm7ln8HwK7UcbV/giphy.gif?cid=ecf05e47nwc2riha7w8ehrp83jrlvt4tf02xq3neaichs2oi&rid=giphy.gif&ct=g"
              style={{ width: "18rem" }}
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
      </Container>
    </>
  );
};

export default ContentBoard;
