import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link style={{ textDecoration: "none" }} to="/">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "20px",
                marginInline: "none",
                color: "orange",
                fontWeight: "bold",
                fontFamily: "fantasy",
                fontSize: "15px",
              }}
            >
              {" "}
              GT's PlatForm
            </p>
            <p
              style={{
                color: "whitesmoke",
                fontFamily: "fantasy",
                fontSize: "10px",
              }}
            >
              Simple Way of Retailing
            </p>
          </div>
        </Link>
        <div style={{ color: "pink" }}>
          <Link to="/addstore">
            <span style={{ color: "lightblue" }}>Add Your Store</span>
          </Link>

          {" | "}
          <Link to="/aboutus">
            {" "}
            <span style={{ color: "lightblue" }}> About Us</span>
          </Link>
          {" | "}
          <Link to="/support">
            {" "}
            <span style={{ color: "lightblue" }}> Support</span>
          </Link>
        </div>
      </Navbar>
      <br />
    </div>
  );
}
