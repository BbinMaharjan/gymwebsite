import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";

import AdminRoutes from "./routes/adminroutes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <AdminRoutes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
