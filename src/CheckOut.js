import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function CheckOut() {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <h1>Add Address</h1>
      <form>
        <div class="form-group">
          <label for="Name">Name :</label>
          <input
            type="email"
            class="form-control"
            id="Name"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="form-group">
          <label for="address">Enter Your Address :</label>
          <textarea class="form-control" id="address" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            Select Time Slot for Delivery :
          </label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>7AM-9AM</option>
            <option>9AM-11AM</option>
            <option>11AM-1PM</option>
            <option>1PM-3PM</option>
            <option>3PM-9PM</option>
          </select>
        </div>
        <div class="form-group">
          <label for="additional_info">Message to Store :</label>
          <textarea
            class="form-control"
            id="additional_info"
            rows="2"
          ></textarea>
        </div>
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
              navigate("/thankyou");
            }}
          >
            Add Address
          </Button>{" "}
        </div>
      </form>
    </div>
  );
}
