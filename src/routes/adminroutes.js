import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/admin/dashboard";
import GymMembers from "../pages/admin/gymmembers";
import GymOwner from "../pages/admin/gymOwners";
import GymExercise from "../pages/admin/gymExercise";
import Profile from "../pages/admin/profile";
import DashboardGymOwner from "../pages/client/dashboardGymOwner";

const AdminRoutes = (props) => {
  return (
    <BrowserRouter>
      {localStorage.getItem("token") ? (
        <Switch>
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/gymowners" component={GymOwner} />
          <Route exact path="/admin/gymmembers" component={GymMembers} />
          <Route exact path="/admin/gymexercises" component={GymExercise} />
          <Route exact path="/admin/profile" component={Profile} />
        </Switch>
      ) : (
        (window.location.href = "/")
      )}
      {sessionStorage.getItem("GymOwner") ? (
        <Switch>
          <Route
            exact
            path="/gymowner/dashboard"
            component={DashboardGymOwner}
          />
        </Switch>
      ) : (
        (window.location.href = "/")
      )}
    </BrowserRouter>
  );
};

export default AdminRoutes;
