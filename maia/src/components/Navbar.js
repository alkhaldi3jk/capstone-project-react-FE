import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Navbar, Button, Card } from "react-bootstrap";
import AddService from "./service/AddService";
import authStore from "../stores/authStore";
import SigninModal from "./navbar/SigninModal";
import SignupModal from "./navbar/SignupModal";
import serviceStore from "../stores/serviceStore";

export default function App({ service }) {
  const [showBasic, setShowBasic] = useState(false);
  const [query, setQuery] = useState("");

  const servicesearch = serviceStore.services
    .filter((service) =>
      service.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((service) => <Card key={service._id} product={service} />);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">Maia Services </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          +
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              {
                (authStore.user === null ? (
                  // <MDBNavbarItem>
                  //   <MDBNavbarLink>
                      <SigninModal />
                  //   </MDBNavbarLink>
                  // </MDBNavbarItem>
                ) : (
                  // <MDBNavbarLink active aria-current="page">
                    <Button
                      variant="light"
                      onClick={authStore.logout}
                    >
                      Signout
                    </Button>
                  // </MDBNavbarLink>
                ))
              }
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink >
                <AddService service={service} />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search for Service"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
            <MDBBtn color="light">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
