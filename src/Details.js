import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "./context/DataContext";

export default function Detail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data] = useContext(DataContext);

  const result = data.filter((b) => b.id === parseInt(id));

  return (
    <div className="container">
      {result.map((i) => (
        <div key={i.id}>
          <p
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {i.name}
          </p>
          <p style={{ fontFamily: "monospace" }}>{i.address}</p>
        </div>
      ))}
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Enter the List of
            <span style={{ fontFamily: "serif", color: "darkorange" }}>
              {" "}
              Items
            </span>{" "}
            and{" "}
            <span style={{ fontFamily: "serif", color: "darkgoldenrod" }}>
              Quantity
            </span>{" "}
            seperated by commas
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Button
          variant="dark"
          onClick={() => {
            navigate("/additems");
            alert("Items Added");
          }}
        >
          Add Address
        </Button>{" "}
      </div>
    </div>
  );
}
