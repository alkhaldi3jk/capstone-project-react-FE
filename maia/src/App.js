import { Route, Router, Switch } from "react-router";
import "./App.css";
import ServiceDetail from "./components/service/ServiceDetail";
import ServiceList from "./components/service/ServiceList";
import UserList from "./components/users/UserList";

function App() {
  return (
    <div className="App">
      <h1>HI</h1>
      <Switch>
        <Route exact path="/dashboar/:serviceId">
          <ServiceDetail />
        </Route>
        <Route path="/dashboard">
          <ServiceList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
