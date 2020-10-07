import React, { useState } from "react";
import { DataContext } from "./context/DataContext";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function Products() {
  const [pincode, setPincode] = useState("");
  const { category } = useParams();
  const [data] = useContext(DataContext);

  function renderProduct(p) {
    return (
      <div key={p.id}>
        <Card style={{ width: "18rem", marginBottom: "15px" }}>
          <Card.Img
            variant="top"
            style={{ width: "18rem", height: "200px" }}
            src={`/images/${p.image}`}
          />
          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            <Card.Text>{p.address}</Card.Text>
            <Link to={`/${category}/${p.id}`}>
              <Button variant="dark">Shop</Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }

  const filteredProducts = pincode
    ? data.filter((p) =>
        p.pincodes.find((s) => s.pincode === parseInt(pincode))
      )
    : data;

  return (
    <>
      <section
        className="container"
        style={{ padding: "15px", textAlign: "center" }}
      >
        <label htmlFor="size">Select Your Pincode:</label>{" "}
        <p
          style={{ color: "GrayText", fontFamily: "fantasy", fontSize: "15px" }}
        >
          {" "}
          *Organic Products are available only in 560003
        </p>
        <Form.Control
          size="sm"
          as="select"
          id="size"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        >
          <option value="">All Pincodes </option>
          <option value="560093">560093</option>
          <option value="560095">560095</option>
          <option value="560001">560001</option>
          <option value="560002">560002</option>
          <option value="560003">560003</option>
          <option value="560004">560004</option>
        </Form.Control>
        {/* <select
          id="size"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        >
          <option value="">All Pincodes </option>
          <option value="560093">560093</option>
          <option value="560095">560095</option>
          <option value="560001">560001</option>
          <option value="560002">560002</option>
          <option value="560003">560003</option>
          <option value="560004">560004</option>
        </select> */}
        {pincode && (
          <h2 className="container">
            Found{" "}
            <span style={{ color: "orange" }}>{filteredProducts.length}</span>{" "}
            Shops
          </h2>
        )}
      </section>

      <section
        style={{
          padding: "4px",
          marginBottom: "15px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {filteredProducts.map(renderProduct)}
      </section>
    </>
  );
}
