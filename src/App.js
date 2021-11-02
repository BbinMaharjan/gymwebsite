import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";

import Login from "./pages/admin/login";
import RegisterAdmin from "./pages/admin/register";

import AdminRoutes from "./routes/adminroutes";
import GymOwnerRoute from "./routes/gymownerroutes";

import { Provider } from "react-redux";
import store from "./store/index";
import GymOwnerLogin from "./pages/client/gymOwnerLogin";
import RegisterGymOwner from "./pages/client/registerGymOwner";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin/register" component={RegisterAdmin} />
          <Route exact path="/gymowner/login" component={GymOwnerLogin} />
          <Route exact path="/gymowner/register" component={RegisterGymOwner} />
          <Route exact path="/admin/dashboard" component={AdminRoutes} />
          <GymOwnerRoute />
          {/* <Route exact path="/gymowner/dashboard" component={GymOwnerRoute} /> */}
        </Switch>
      </BrowserRouter>
      {/* <GymOwnerRoute />
      <AdminRoutes /> */}
    </Provider>
  );
}

export default App;
