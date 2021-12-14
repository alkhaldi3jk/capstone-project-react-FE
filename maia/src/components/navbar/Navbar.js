import React, { useState } from "react";
import AddService from "../service/AddService";
import SigninModal from "./SigninModal";
import serviceStore from "../../stores/serviceStore";
import { Link } from "react-router-dom";

export default function App({ service }) {
  const [showBasic, setShowBasic] = useState(false);
  const [query, setQuery] = useState("");

  // const serachBar = serviceStore.services.filter((service) =>
  //   service.name.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <button
        variant="secondary"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
       <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link"> */}
              {/* <SigninModal /> */}
            {/* </a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link " variant="secondary">
              {/* <AddService service={service} /> */}
            {/* </a>
          </li> */}
        {/* </ul>  */}
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" to="/services">
              Services
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <Link class="nav-link" to="/users">
              Users
            </Link>
          </li>
        </ul>


       </div>
    </nav>
  );
}
