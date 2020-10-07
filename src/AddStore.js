import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function AddStore() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <h1 style={{ fontFamily: "revert", color: "royalblue" }}>
        Fill Details to Get in Touch With Us
      </h1>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name : </Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address : </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Type of Store</Form.Label>
          <Form.Control as="select">
            <option>Super Market</option>
            <option>Only-Online</option>
            <option>Provision Store</option>
            <option>WholeSale Retailer</option>
            <option>Others</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Query </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <Button variant="dark" onClick={() => navigate("/thankyou")}>
            Submit
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
}
