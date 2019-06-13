import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar className="bg-light justify-content-between">
      {/* expand="lg"
      sticky="top"
      bg="light" */}

      <Navbar.Brand href="#home">Bookstore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search for book"
          className="mr-sm-2"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
