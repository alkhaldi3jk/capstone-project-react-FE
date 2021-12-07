import  Navbar  from "./components/Navbar";
import { Route, Router, Switch } from "react-router";
import "./App.css";
import ServiceDetail from "./components/service/ServiceDetail";
import ServiceList from "./components/service/ServiceList";
import UserList from "./components/users/UserList";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Maia Admin</h1>
      <Switch>
        <Route exact path="/dashboar/:serviceId">
          <ServiceDetail />
        </Route>
        <Route exact path="/">
          <ServiceList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
