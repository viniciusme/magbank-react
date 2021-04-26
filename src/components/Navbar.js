import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Button,
  Form,
} from 'react-bootstrap';
import './Navbar.scss';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ handleCreateAcc, logged, auth }) => {
  const history = useHistory();

  const handleClick = () => {
    auth.logout(() => history.push('/'));
  };

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="Magbank logo"
            />
          </Link>
        </Navbar.Brand>

        {logged && (
          <>
            <Form>
              <div className="navbar__search-group d-none d-lg-flex">
                <Form.Control type="text" placeholder="O que você procura?" />
                <Button variant="link">
                  <FontAwesomeIcon icon={faSearch} colo="#fff" />
                </Button>
              </div>
            </Form>

            <Button variant="outline-light" onClick={handleClick}>
              Sair
            </Button>
          </>
        )}

        {!logged && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>Cartão</Nav.Link>
                <Nav.Link>Quem Somos</Nav.Link>
                <Nav.Link>Faq</Nav.Link>
                <Nav.Link>Link</Nav.Link>
              </Nav>

              <ButtonGroup aria-label="Basic example">
                <DropdownButton
                  as={ButtonGroup}
                  title="Acessar minha conta"
                  id="bg-nested-dropdown"
                  variant="outline-light"
                >
                  <Dropdown.Item eventKey="1">
                    <Link to="/login">Pessoa Físca</Link>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">
                    <Link to="/login">Pessao Jurídica</Link>
                  </Dropdown.Item>
                </DropdownButton>

                <Button variant="outline-light" onClick={handleCreateAcc}>
                  abra sua conta
                </Button>
              </ButtonGroup>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;
