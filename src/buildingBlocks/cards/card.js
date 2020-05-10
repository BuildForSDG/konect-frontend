import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../buttons";
import Text from "../typography";

const BusinessCard = (props) => {
  return (
    <Card
      style={{
        maxWidth: "236px",
        borderRadius: "20px",
        padding: "0",
        paddingBottom: "0.5rem",
        border: "1px solid #E5E5E5",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Card.Img style={{ width: "100%" }} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <Text black normal>
            {props.name}
          </Text>
        </Card.Title>
        <Card.Title style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <Text black normal>
            {props.price}
          </Text>
        </Card.Title>
        <Card.Title style={{ textAlign: "center", marginTop: "0.5rem" }}>
          <Text black normal>
            {props.location}
          </Text>
        </Card.Title>

        <Button bright style={props.buttonStyle}>
          <Text white normal>
            {props.buttonText}
          </Text>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BusinessCard;
