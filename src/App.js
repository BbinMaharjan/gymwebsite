import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/admin/login";
import Dashboard from "./pages/admin/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
