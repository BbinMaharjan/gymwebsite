import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardGymOwner from "../pages/client/dashboardGymOwner";

const GymOwnerRoute = (props) => {
  if (!sessionStorage.getItem("GymOwner")) {
    return (window.location.href = "/");
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gymowner/dashboard" component={DashboardGymOwner} />
      </Switch>
    </BrowserRouter>
  );
};

export default GymOwnerRoute;
