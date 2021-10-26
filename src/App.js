import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";

import Login from "./pages/admin/login";
import RegisterAdmin from "./pages/admin/register";

import AdminRoutes from "./routes/adminroutes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/register" component={RegisterAdmin} />
        <AdminRoutes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
