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
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Navbar, Button, Card, Nav, Form } from "react-bootstrap";
import AddService from "./service/AddService";
import authStore from "../stores/authStore";
import SigninModal from "./navbar/SigninModal";
import SignupModal from "./navbar/SignupModal";
import serviceStore from "../stores/serviceStore";

export default function App({ service }) {
  const [showBasic, setShowBasic] = useState(false);
  const [query, setQuery] = useState("");

  serviceStore.services
  .filter((service) =>
  service.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
//     <MDBNavbar expand="lg" light bgColor="light">
//       <MDBContainer fluid>
//         <MDBNavbarBrand href="/">Maia Services </MDBNavbarBrand>

//           {/* <a>
//           <img src="https://cdn.discordapp.com/attachments/912274609162833922/917847105937231882/Screen_Shot_2021-11-29_at_10.19.15_PM.png" style={{width:100, marginTop: -7}} />
//           </a> */}
        
//         <MDBNavbarToggler
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           +
//           <MDBIcon icon="bars" fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
//             <MDBNavbarItem>
// {/* 
//               {
//                 (authStore.user === null ? (
//                   <MDBNavbarItem>
//                     <MDBNavbarLink>
//                       <SigninModal />
//                     </MDBNavbarLink>
//                   </MDBNavbarItem>
//                   ) : ( 
//                    <MDBNavbarLink active aria-current="page">
//                     <Button
//                       variant="light"
//                       onClick={authStore.logout}
//                     >
//                       Signout
//                     </Button>
//                   </MDBNavbarLink>
//                   ))
//                }  */}
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               {/* <MDBNavbarLink > */}

//             <MDBNavbarLink>
//                <SigninModal/>
//               </MDBNavbarLink>
//               <MDBNavbarLink>

//                 <AddService service={service} />
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>

          //  <Form.Control className="d-flex input-group w-auto"
          //     type="search"
          //     className="form-control"
          //     placeholder="Search for Service"
          //     aria-label="Search"
          //     onChange={(event) => setQuery(event.target.value)}
          //   />
//              {/* <MDBBtn color="light">Search</MDBBtn>  */}
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark" >
  <button variant="secondary" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span  class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
  <li class="nav-item active">
        <a class="nav-link" harf="/">Home</a>
      </li>
      </ul>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" ><SigninModal/></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " variant="secondary" ><AddService service={service} /></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      <Form.Control className="d-flex input-group w-auto"
              type="search"
              className="form-control"
              placeholder="Search for Service"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)
              }/>
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    </form>
  </div>
</nav>
  );
}
