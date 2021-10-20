import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../pages/admin/login";
import RegisterAdmin from "../pages/admin/register";
import Dashboard from "../pages/admin/dashboard";
import GymMembers from "../pages/admin/gymmembers";
import GymOwner from "../pages/admin/gymOwners";

const AdminRoutes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={RegisterAdmin} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/gymowners" component={GymOwner} />
        <Route exact path="/admin/gymmembers" component={GymMembers} />
      </Switch>
    </BrowserRouter>
  );
};

export default AdminRoutes;
