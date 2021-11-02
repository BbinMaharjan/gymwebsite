import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DrawerGymOwner from "../components/Drawer/DrawerGymOwner";
import Footer from "../components/footer/footer";
import AddGymMemeber from "../pages/client/addGymMember";

import DashboardGymOwner from "../pages/client/dashboardGO";
import GymMembers from "../pages/client/gymMembers";
import ProfileGymOwner from "../pages/client/profileGymOwner";

const GymOwnerRoute = (props) => {
  if (!localStorage.getItem("token")) {
    return (window.location.href = "/");
  }
  return (
    <BrowserRouter>
      <DrawerGymOwner />
      <Switch>
        <Route exact path="/gymowner/dashboard" component={DashboardGymOwner} />
        <Route exact path="/gymowner/profile" component={ProfileGymOwner} />
        <Route exact path="/gymowner/addgymmeber" component={AddGymMemeber} />
        <Route exact path="/gymowner/gymmembers" component={GymMembers} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default GymOwnerRoute;
