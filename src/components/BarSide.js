import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import moodle from "../images/icons/moodle.png";

const BarSide = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const hideWhenVisible = { display: menuVisible ? "none" : "" };
  const showWhenVisible = { display: menuVisible ? "" : "none" };

  const openMenu = () => {
    setMenuVisible(true);
    document.getElementById("main").style.marginLeft = "11rem";
  };

  const closeMenu = () => {
    setMenuVisible(false);
    document.getElementById("main").style.marginLeft = "0";
  };

  return (
    <div id="my-sidebar">
      <div class="sidebar-close" style={hideWhenVisible}>
        <div onClick={openMenu} class="sidebar-title pl-2">
          Menu <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="sidebar-open" style={showWhenVisible}>
        <div onClick={closeMenu} class="sidebar-title pl-2">
          Menu <i class="fas fa-times"></i>
        </div>

        <Nav class="ml-2">
          <LinkContainer to="/">
            <Nav.Link class="sidebar-link">Front page</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/blogs">
            <Nav.Link class="sidebar-link">Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/courses">
            <Nav.Link class="sidebar-link">Courses</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/privatelessons">
            <Nav.Link class="sidebar-link">Private Lessons</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/maintenances">
            <Nav.Link class="sidebar-link">Maintenance services</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link class="sidebar-link">About us</Nav.Link>
          </LinkContainer>
          <hr />
          
          <div>
            <LinkContainer to="/error">
              <Nav.Link>
                <img src={moodle} alt="..." height="15px" class="pr-1"></img>Moodle
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/error">
              <Nav.Link>
                <i class="fas fa-shopping-cart"></i> Online store
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/error">
              <Nav.Link>
                <i class="far fa-calendar-alt"></i> Event calendar
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/error">
              <Nav.Link>
                <i class="fas fa-calendar-check"></i> Online booking form
              </Nav.Link>
            </LinkContainer>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default BarSide;
