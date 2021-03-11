import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

const CenteredButton = ({ children }) => (
  <Container>
    <Row className="d-flex justify-content-center">
      <Button className="my-5 px-5 py-3" variant="success" size="lg">
        {children}
      </Button>
    </Row>
  </Container>
);

export default CenteredButton;
