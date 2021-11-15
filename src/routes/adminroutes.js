import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DrawerGymOwner from "../components/Drawer/DrawerGymOwner";
import Footer from "../components/footer/footer";

import DashboardGymOwner from "../pages/client/dashboardGymOwner";
import GymMembers from "../pages/client/gymMemebers";
import AddGymMemeber from "../pages/client/addGymMemeber";
import ProfileGymOwner from "../pages/client/profileGymOwner";

// import Dashboard from "../pages/admin/dashboard";
// import GymMembers from "../pages/admin/gymmembers";
// import GymOwner from "../pages/admin/gymOwners";
// import GymExercise from "../pages/admin/gymExercise";
// import Profile from "../pages/admin/profile";

const AdminRoutes = (props) => {
  return (
    <>
      {sessionStorage.getItem("GymOwner") ? (
        <BrowserRouter>
          <DrawerGymOwner />
          <Switch>
            <Route
              exact
              path="/gymowner/dashboard"
              component={DashboardGymOwner}
            />
            <Route exact path="/gymowner/profile" component={ProfileGymOwner} />
            <Route
              exact
              path="/gymowner/addgymmeber"
              component={AddGymMemeber}
            />
            <Route exact path="/gymowner/gymmembers" component={GymMembers} />
          </Switch>
          <Footer />
        </BrowserRouter>
      ) : (
        (window.location.href = "/")
      )}
      {/* {localStorage.getItem("token") ? (
        <BrowserRouter>
          <Switch>
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/gymowners" component={GymOwner} />
            <Route exact path="/admin/gymmembers" component={GymMembers} />
            <Route exact path="/admin/gymexercises" component={GymExercise} />
            <Route exact path="/admin/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      ) : (
        (window.location.href = "/")
      )} */}
    </>
  );
};

export default AdminRoutes;
