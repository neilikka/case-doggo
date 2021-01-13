import React from 'react';
import {
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../images/icons/logo.png';

const BarTop = () => {
    return (
        <div class="sticky-top bar-top">
            <Navbar variant="light" expand="lg" sticky-top>
                <Navbar.Brand href="/">
                    <img src={logo}
                        alt="..."
                        width="100px"
                        class="pl-1"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="mr-auto">
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
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/error">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                    <div class="input-group mb-3 ml-auto search-top">
                        <input type="text" class="form-control" placeholder="Search..." aria-label="search" aria-describedby="basic-addon2"/>
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
}

export default BarTop;
