import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";

import Login from "./pages/admin/login";
import RegisterAdmin from "./pages/admin/register";

import PrivateRoutes from "./routes/adminroutes";

import GymOwnerLogin from "./pages/client/gymOwnerLogin";
import RegisterGymOwner from "./pages/client/registerGymOwner";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={RegisterAdmin} />

        <Route exact path="/gymowner/login" component={GymOwnerLogin} />
        <Route exact path="/gymowner/register" component={RegisterGymOwner} />
        <Route>
          <PrivateRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
