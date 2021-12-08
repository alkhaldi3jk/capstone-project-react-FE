import Navbar from "./components/Navbar";
import { Route, Router, Switch } from "react-router";
import "./App.css";
import ServiceDetail from "./components/service/ServiceDetail";
import ServiceList from "./components/service/ServiceList";
import UserList from "./components/users/UserList";
import SigninModal from "./components/navbar/SigninModal";
import authStore from "./stores/authStore";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App">
      <Navbar />

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

export default observer(App);
