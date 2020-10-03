import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from './Img/Cocktail.png'


function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="Cocktail"/>
                Cocktail
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Navbar>
    )
}

export default Navigation;
