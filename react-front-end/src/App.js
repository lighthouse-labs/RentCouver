import React, { Component, Fragment } from "react";
// import axios from 'axios';
import Navigation from "./components/Navigation";
import PropertyListing from "./components/PropertyListing";
import Filters from "./components/PropertyListing/Filters";
import Homepage from "./components/Homepage/index";
import User from "./components/User/index";
import "./App.css";

export default function App() {
  const items = [
    { name: "home", label: "Home" },
    {
      name: "billing",
      label: "Billing",
      items: [
        { name: "statements", label: "Statements" },
        { name: "reports", label: "Reports" },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      items: [{ name: "profile", label: "Profile" }],
    },
  ];

  return (
    <>
      <Navigation />
      {/* <PropertyDisplay /> */}
      <PropertyListing />
      {/* <User /> */}
      {/* <Homepage/> */}
    </>
  );
}
