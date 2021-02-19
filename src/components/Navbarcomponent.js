import { Button } from 'bootstrap'
import React, { useState } from 'react'
import {Navbar,Nav,NavDropdown, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../contexts/Authcontexts'


export default function NavbarComponent() {
    const {logout,currentUser}=useAuth()
    const history=useHistory()
    const [error,setError]=useState()

 async function handleSubmit(){
      setError('')
      try{
      await logout()
      history.push("/")
      }catch{
      setError("Failed to Sign Out")
      }
    
  }
    return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">CEG Acxions</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">CEG Reads</Nav.Link>
      <Nav.Link href="#features">CEG Cares</Nav.Link>
      <Nav.Link href="#pricing">CEG Speaks</Nav.Link>
    </Nav>
    <NavDropdown title="Account" id="basic-nav-dropdown" className="mr-5 text-align-center">
        <NavDropdown.Item >{currentUser.email}</NavDropdown.Item>
        <NavDropdown.Item ><Link to="/update-password">Change Password</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item ><Button onClick={handleSubmit}>Sign Out</Button></NavDropdown.Item>
      </NavDropdown>
  </Navbar>
    )
}
