import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SelectionPage() {
  const activeStyle = {
    // border: "2px solid orange",
  };

  return (
    <div>
      <Link to="/">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              marginTop: "1px",
              width: "150px",
              height: "160px",
              borderRadius: "20px",
            }}
            alt="Mithun-Logo"
            src="/images/logo.png"
          />
        </div>
      </Link>

      <h6
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontFamily: "fantasy",
          fontWeight: "bolder",
          color: "lightcoral",
          marginBottom: "15px",
        }}
      >
        {" "}
        Looking for????
      </h6>
      <div
        style={{
          display: "flex",

          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink
          activeStyle={activeStyle}
          style={{ marginBottom: "10px" }}
          to="/fruits-vegitables"
        >
          <img
            className="select-img"
            style={{ borderRadius: "20px" }}
            src="/images/vegitables1.jpg"
            alt="veg"
          />
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/dals-and-cereals">
          <img
            className="select-img"
            style={{ borderRadius: "20px" }}
            src="/images/PULSES.jpg"
            alt="veg"
          />{" "}
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/fruits-vegitablesy">
          <img
            className="select-img"
            style={{ borderRadius: "20px" }}
            src="/images/drinks.jpg"
            alt="veg"
          />
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/fruits-vegitablesm">
          <img
            className="select-img"
            style={{ borderRadius: "20px" }}
            src="/images/organic.jpg"
            alt="veg"
          />
        </NavLink>
      </div>
    </div>
  );
}
