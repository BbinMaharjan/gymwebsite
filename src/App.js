import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";

import RegisterAdmin from "./pages/admin/register";
import GymMembers from "./pages/admin/gymmembers";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/register" component={RegisterAdmin} />
        <Route exact path="/admin/gymmembers" component={GymMembers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
