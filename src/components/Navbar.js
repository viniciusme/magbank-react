import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Button,
} from 'react-bootstrap';
import './Navbar.scss';
import logo from '../assets/logo.svg';

const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">Faq</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>

        <ButtonGroup aria-label="Basic example">
          <DropdownButton
            as={ButtonGroup}
            title="Acessar minha conta"
            id="bg-nested-dropdown"
            variant="outline-light"
          >
            <Dropdown.Item eventKey="1">Pessoa Físca</Dropdown.Item>
            <Dropdown.Item eventKey="2">Pessao Jurídica</Dropdown.Item>
          </DropdownButton>

          <Button variant="outline-light" onClick={handleCreateAcc}>
            abra sua conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
