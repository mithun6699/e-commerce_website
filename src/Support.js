import React from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Support() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Type Of Support
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              navigate("/addstore");
            }}
          >
            Item Defect
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/addstore");
            }}
          >
            Late Delivery
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              navigate("/addstore");
            }}
          >
            Billing
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
