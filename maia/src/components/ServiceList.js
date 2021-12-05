import React from "react";
import serviceStore from "../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import SigninModal from "./SigninModal"
import SignupModal from "./SignupModal"
import authStore from "../stores/authStore";
import { Nav, Navbar, Container } from "react-bootstrap";
import AddService from "./AddService";

function ServiceList({service}) {
  const serviceList = serviceStore.services.map((service) => (
    <ServiceItem service={service} key={service._id} />
  ));
  return (
    <div>
              {!authStore.user ? (
                <>
                  <SigninModal />

                  <SignupModal />
                </>
              ) : (
                <>
                  <div className={`user`}>
                    <h6>{authStore.user.username}</h6>
                  </div>

                  <div>
                    <Nav.Link
                      href=""
                      variant="contained"
                      justify="space-between"
                      onClick={authStore.logout}
                    >
                      Signout
                    </Nav.Link>
                  </div>
                </>
              )}
              <AddService service={service}/>
      <h1>{serviceList}</h1>
    </div>
  );
}

export default observer(ServiceList);
