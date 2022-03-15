import React from "react";
import '../Geral.css'
import './Templates.css'
import {NavLink} from "react-router-dom";
import {Button, Col, Image, Row} from "react-bootstrap";

const Templates = () => {

  return (
    <div className="content">
      <Row>
      <h1 className="title">Templates</h1>
      <NavLink className="ml-auto" to="/event"><Button className="btn0">
        Começar do zero
      </Button></NavLink>
      </Row>
      <div>
        <h2 className="subtitle">Categorias</h2>
        <Row>
          <div className="d1 categ">Todos</div>
          <div className="d2 categ">Quadrado</div>
          <div className="d3 categ">Horizontal</div>
          <div className="d4 categ">Vertical</div>
          <div className="d5 categ">Festivais</div>
          <div className="d1 categ">Viagens</div>
          <div className="d2 categ">Concertos</div>
        </Row>
      </div>
      <Row className="mt-1 template-galery">
          <Col xs={12} sm={6} md={4} xl={3}>
              <Image src="imgs/template(1).png" className="mb-2"/>
              <Image src="imgs/template(6).png" className="mb-2"/>
        </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
              <Image src="imgs/template(3).png" className="mb-2"/>
              <Image src="imgs/template(4).png" className="mb-2"/>
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
              <Image src="imgs/template(5).png" className="mb-2"/>
          </Col>
          <Col xs={12} sm={6} md={4} xl={3}>
              <Image src="imgs/template(7).png" className="mb-2"/>
              <Image src="imgs/template(2).png" className="mb-2"/>
          </Col>

      </Row>

    </div>
  )

};
export default (Templates);


