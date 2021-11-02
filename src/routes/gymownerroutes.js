import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DashboardGymOwner from "../pages/client/dashboardGO";
import ProfileGymOwner from "../pages/client/profileGymOwner";

const GymOwnerRoute = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gymowner/dashboard" component={DashboardGymOwner} />
        <Route exact path="/gymowner/profile" component={ProfileGymOwner} />
      </Switch>
    </BrowserRouter>
  );
};
export default GymOwnerRoute;
