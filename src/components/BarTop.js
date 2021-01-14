import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../images/icons/logo.png";

const BarTop = () => {
  return (
    <div class="sticky-top bar-top">
      <Navbar variant="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="..." height="45px" class="pl-1"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div class="input-group mb-3 ml-auto search-topbar">
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <a href="/search">
                <button class="btn btn-outline-secondary" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </a>
            </div>
          </div>
          <i class="fab fa-facebook-square icons fa-2x"></i>
          <i class="fab fa-instagram icons fa-2x"></i>
          <i class="fab fa-youtube icons fa-2x"></i>
          <i class="fab fa-twitter icons fa-2x"></i>
          <i class="fas fa-share-alt-square icons fa-2x"></i>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default BarTop;
