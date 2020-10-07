import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./context/DataContext";

import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Details";
import CheckOut from "./CheckOut";
import Thankyou from "./Thankyou";
import SelectionPage from "./SelectionPage";
import AddStore from "./AddStore";
import Support from "./Support";
import AboutUs from "./AboutUs";

export default function App() {
  return (
    <>
      <div className="content">
        <DataProvider>
          <Header />
          <SelectionPage />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <h1 style={{ textAlign: "center" }}>
                    Welcome to{" "}
                    <span style={{ color: "darkmagenta" }}>
                      <br />
                      Platform
                    </span>
                  </h1>
                }
              />
              <Route path="/:category" element={<Products />} />

              <Route path="/:category/:id" element={<Detail />} />
              <Route path="/additems" element={<CheckOut />} />
              <Route path="/thankyou" element={<Thankyou />} />
              <Route path="/addstore" element={<AddStore />} />
              <Route path="/support" element={<Support />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
          </main>
        </DataProvider>
      </div>
      <Footer />
    </>
  );
}
