import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  faMobileAlt,
  faMobile,
  faGlobe,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import IconText from './IconText';
import './Institutional.scss';

const Institutional = () => (
  <section className="institutional text-light py-5">
    <Container>
      <Row>
        <Col xs={12} lg={5} />
        <Col xs={12} lg={7}>
          <h2 className="institutional-title my-5">Já nascemos digital</h2>
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <IconText icon={faMobileAlt} color="#fff" className="mb-2">
            Sem fila e sem burocracia
          </IconText>
          <IconText icon={faMobile} color="#fff" className="mb-2">
            Simples e prático
          </IconText>
          <IconText icon={faGlobe} color="#fff" className="mb-2">
            Abertura de conta 100% online
          </IconText>
          <IconText icon={faShieldAlt} color="#fff" className="mb-2">
            Transações mais seguras
          </IconText>
          <Button variant="outline-light" className="mt-5">
            Abra sua conta
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Institutional;
