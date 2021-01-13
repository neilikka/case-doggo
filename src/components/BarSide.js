import React, { useState } from 'react'
import {
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const BarSide = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const hideWhenVisible = { display: menuVisible ? 'none' : '' }
    const showWhenVisible = { display: menuVisible ? '' : 'none' }

    const openMenu = () =>{
        setMenuVisible(true);
        document.getElementById("my-sidebar").style.width = "250px";
        document.getElementById("move-this").style.marginLeft = "250px";
    };

    const closeMenu = () =>{
        setMenuVisible(false);
        document.getElementById("my-sidebar").style.width = "0px";
        document.getElementById("move-this").style.marginLeft = "0px";
    };

    return (
        <div  id="my-sidebar">  
            <div class="sidebar" style={hideWhenVisible}>
                <p onClick={openMenu}><i class="far fa-plus-square white-background"></i> Menu</p>
            </div>
            <div class="sidebar" style={showWhenVisible}>
                <p onClick={closeMenu}><i class="far fa-minus-square white-background"></i> Menu</p>
  
                <Nav class="ml-2">
                        <LinkContainer to="/" >
                            <Nav.Link  class="sidebar-link">Front page</Nav.Link >
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
                        <hr/>
                        <br/><br/>
                        <LinkContainer to="/error">
                            <Nav.Link>Moodle</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/error">
                            <Nav.Link><i class="fas fa-shopping-cart"></i> Online store</Nav.Link>                            
                        </LinkContainer>             
                        <LinkContainer to="/error">
                            <Nav.Link><i class="far fa-calendar-alt"></i> Event calendar</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/error">
                            <Nav.Link><i class="fas fa-calendar-check"></i> Online booking form</Nav.Link>
                        </LinkContainer>

                        {/* <NavDropdown title="Other links" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/error"></NavDropdown.Item>
                            <NavDropdown.Item href="/error"></NavDropdown.Item>
                            <NavDropdown.Item href="/error"></NavDropdown.Item>
                            <NavDropdown.Item href="/error"></NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/error">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>         
            </div>        
        </div>
    );
}

export default BarSide;