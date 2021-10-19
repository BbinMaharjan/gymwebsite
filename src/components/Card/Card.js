import React from "react";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const CardView = (props) => {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Card
        color={props.color}
        style={{
          margin: "10px",
          borderRadius: "20px",
          borderWidth: "2px",
          borderColor: "gray",
          padding: "5px",
        }}
      >
        <CardImg top width="100%" height="100%" src={props.image} alt="image" />
        <CardBody>
          <CardTitle
            tag="h4"
            style={{ textAlign: "center", color: "white", letterSpacing: 2 }}
          >
            {props.title}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardView;
