import React from "react";
import { Card } from "react-bootstrap";

export default function AboutUs() {
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card style={{ width: "18rem", marginTop: "25px", marginBottom: "25px" }}>
        <Card.Body>
          <Card.Title>G T Mithun Raj</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Software Developer
          </Card.Subtitle>
          <Card.Text>
            Software Engineer | Data Science Enthusiast | Python | ReactJs |
            Master's in Software Engineering,Ramaiah Institute of Technology
            Bangalore | Experience in Application Development | Ex Intel
            Bangalore | Qualcomm Hyderabad
          </Card.Text>
          <Card.Link href="#">My Other Works </Card.Link>
          <Card.Link href="http://gtmithunraj.me/">My Website</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
