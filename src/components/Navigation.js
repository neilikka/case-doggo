import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../images/icons/logo.png';

const Navigation = () => {
    return (
       <div class="sticky-top">
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Logo</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <LinkContainer to="/">
                      <Nav.Link>Front page</Nav.Link>
                    </LinkContainer>
                  </li>
                  <li class="nav-item">
                     <LinkContainer to="/blogs">
                       <Nav.Link>Blogs</Nav.Link>
                     </LinkContainer>
                  </li>
                  <li class="nav-iteme">
                    <LinkContainer to="/courses">
                      <Nav.Link>Courses</Nav.Link>
                    </LinkContainer>
                  </li>
                  <li class="nav-item">
                    <LinkContainer to="/privatelessons">
                      <Nav.Link>Private Lessons</Nav.Link>
                    </LinkContainer>   
                  </li>
                  <li class="nav-item">
                    <LinkContainer to="/maintenances">
                      <Nav.Link>Maintenance services</Nav.Link>
                    </LinkContainer>
                  </li>
                  <li class="nav-item">
                    <LinkContainer to="/about">
                      <Nav.Link>About us</Nav.Link>
                    </LinkContainer>
                  </li>                                    
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Dropdown
                    </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                     </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
            </div>
         </nav> */}


         <Navbar variant="light" expand="lg" sticky-top>
         <Navbar.Brand href="/"><img src={logo} alt="..." width="100px" class="pl-1"></img></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <LinkContainer to="/">
                 <Nav.Link>Front page</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blogs">
                 <Nav.Link>Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/courses">
                 <Nav.Link>Courses</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/privatelessons">
                 <Nav.Link>Private Lessons</Nav.Link>
              </LinkContainer>              
              <LinkContainer to="/maintenances">
                 <Nav.Link>Maintenance services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                 <Nav.Link>About us</Nav.Link>
              </LinkContainer>

               <NavDropdown title="Other links" id="basic-nav-dropdown">
               <NavDropdown.Item href="/error">Moodle</NavDropdown.Item>
               <NavDropdown.Item href="/error">Online store</NavDropdown.Item>
               <NavDropdown.Item href="/error">Event calendar</NavDropdown.Item>
               <NavDropdown.Item href="/error">Online booking form</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="/error">Separated link</NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <div class="input-group mb-3 search-top">
               <input type="text" class="form-control" placeholder="Search..." aria-label="search" aria-describedby="basic-addon2" />
               <div class="input-group-append">
                  <a href="/search">
                    <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
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
}

export default Navigation;