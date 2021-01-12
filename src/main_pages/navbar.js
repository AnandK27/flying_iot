import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar className="navbar navbar-expand navbar-dark bg-dark">
        <Navbar.Brand as={Link} to='/' exact>Flying IoT</Navbar.Brand>

          <Nav>
              <Nav.Link as={NavLink} to="/" exact> Home </Nav.Link>
              <Nav.Link as={NavLink} to="/dronecontrol">DroneControls</Nav.Link>
              <Nav.Link as={NavLink} to="/clouddata">CloudData</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
      
      </Navbar>
    )
}

export default NavBar;