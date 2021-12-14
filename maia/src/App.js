import Navbar from "./components/navbar/Navbar";
import { Route, Router, Switch } from "react-router";
import "./App.css";
import ServiceDetail from "./components/service/ServiceDetail";
import ServiceList from "./components/service/ServiceList";
import UserList from "./components/users/UserList";
import SigninModal from "./components/navbar/SigninModal";
import authStore from "./stores/authStore";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import serviceStore from "./stores/serviceStore";
import AddService from "./components/service/AddService";

function App({service}) {

  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
 <a>
          <img src="https://cdn.discordapp.com/attachments/912274609162833922/917847105937231882/Screen_Shot_2021-11-29_at_10.19.15_PM.png" style={{width:250 , marginTop: -7}} />
          </a>
          <AddService service={service} />
          <SigninModal />
          </Route>
{/* <h1 className="text">Maia Services</h1> */}
      <Route exact path="/services">
          <ServiceList />
        </Route>
        <Route exact path="/services/:serviceId">
          <ServiceDetail />
        </Route>
        <Route exact path="/users">
          <UserList />
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);
