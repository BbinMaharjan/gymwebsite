import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";
import Members from "./pages/members";

import RegisterAdmin from "./pages/admin/register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/register" component={RegisterAdmin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
