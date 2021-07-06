import React, { Component, Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";
import ApplicationReview from "./components/ApplicationReview";
import Homepage from "./components/Homepage";
import PropertyDetails from "./components/PropertyDetails";
import PropertyListing from "./components/PropertyListing";
import RefReqList from "./components/RefReqList";
import RentHistory from "./components/RentHistory";
import User from "./components/User";

import "react-slideshow-image/dist/styles.css";
import "./App.css";

export default function App() {
  
  const list = [{
    "name":"Felicia", 
    "address": "property address",
    "currentState": "request"
  },
  {
    "name":"Sumin", 
    "address": "property address",
    "currentState": "request"
  }
]
  
  const [refReqList, setRefReqList] = useState(list);

  useEffect(() => {
    setRefReqList(list)
  },[])

  return (
    <>
      <Router>
        <Navigation />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/properties">
            <PropertyDetails />
          </Route>
          <Route path="/applicationForm">
            <ApplicationForm propertyId={17} />
          </Route>
          <Route path="/property_listings">
            <PropertyListing />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/app_list">
            <ApplicationList />
          </Route>
          <Route path="/app_review">
            <ApplicationReview />
          </Route>
          <Route path="/rent_history">
            <RentHistory />
          </Route>
          <Route path="/ref_request_list">
            <RefReqList refReqList={refReqList} setRefReqList={setRefReqList} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
