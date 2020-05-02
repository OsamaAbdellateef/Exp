import React from 'react';
import './header.style.scss';
import {Container ,  Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import {ReactComponent as Logo} from './../../crown.svg';
import {auth} from './../../firebase/firebase.utils';


const Header = ({currentUserState}) => (

    <React.Fragment>

        <Navbar bg="light" expand="lg">
            {
                currentUserState ? 
                console.log('this is true ',currentUserState)
                :
                console.log('false')
            }
            <Container>
            <Navbar.Brand href="/"><Logo /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="mr-4" href="/shop">Shop</Nav.Link>
                    <Nav.Link className="mr-4" href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/signin">
                    </Nav.Link>
                    {currentUserState ? 
                    <Nav.Link onClick={() => auth.signOut()} >
                        Sign Out 
                    </Nav.Link>
                    :
                    <Nav.Link href="/signIn"> 
                        Sign In
                    </Nav.Link> 
                }
                </Nav>
            </Navbar.Collapse>
            
            </Container>
        </Navbar>
    </React.Fragment>

)

export default Header;