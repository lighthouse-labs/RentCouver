import React, { Component, Fragment } from "react";
// import axios from 'axios';
import Navigation from "./components/Navigation";
import Map from "./components/PropertyListing/Map";
import PropertyDisplay from "./components/PropertyListing/PropertyList";
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
      <PropertyDisplay />
<<<<<<< HEAD
      {/* <Map /> */}
      {/* <User /> */}
      {/* <Homepage/> */}
=======
      <Map />
      <User />
      {/* <PropertyDisplay />  */}
      {/* <Map /> */}
      {/* <User /> */}
      <Homepage />
>>>>>>> 6ea42003356c8134eb7ba9cf29ce77a1627083f3
    </>
  );
}
