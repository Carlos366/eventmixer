import React from "react";
import '../Geral.css'
import './About.css'
import {Col, Row, Card} from 'react-bootstrap';
import {FaUserCircle, FaFacebookF, FaLinkedinIn, FaGithub} from "react-icons/fa";


const About = () => {

  return (
    <div className="content">
      <div className="about" style={{ background: `linear-gradient(
      90deg, rgba(87,75,154,1) 0%, rgba(161,124,181,1) 100%)`}}>
        <h1 className="text-center">Sobre nós</h1>
      </div>
        <h1 className="title mt-5 pt-3">Equipa</h1>
      <Row className="mb-5">
        <Col xs={12} md={6} lg={3}>
          <Card className="p-5">
            <FaUserCircle className="teamimg mb-2 mx-auto"/>
            <h3 className="text-center nome">Carlos Costa</h3>
            <p className="text-center">Web Developer</p>
            <Row className="mx-auto mt-4">
              <FaFacebookF className="mx-1"></FaFacebookF>
              <FaGithub className="mx-1"></FaGithub>
              <FaLinkedinIn className="mx-1"></FaLinkedinIn>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="p-5">
            <FaUserCircle className="teamimg mb-2 mx-auto"/>
            <h3 className="text-center nome">Daniel Mendes</h3>
            <p className="text-center">Web Developer</p>
            <Row className="mx-auto mt-4">
              <FaFacebookF className="mx-1"></FaFacebookF>
              <FaGithub className="mx-1"></FaGithub>
              <FaLinkedinIn className="mx-1"></FaLinkedinIn>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="p-5">
            <FaUserCircle className="teamimg mb-2 mx-auto"/>
            <h3 className="text-center nome">Fédora Lucas</h3>
            <p className="text-center">Web designer</p>
            <Row className="mx-auto mt-4">
              <FaFacebookF className="mx-1"></FaFacebookF>
              <FaGithub className="mx-1"></FaGithub>
              <FaLinkedinIn className="mx-1"></FaLinkedinIn>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Card className="p-5">
            <FaUserCircle className="teamimg mb-2 mx-auto"/>
            <h3 className="text-center nome">Mariana Martins</h3>
            <p className="text-center">Web developer</p>
            <Row className="mx-auto mt-4">
              <FaFacebookF className="mx-1"></FaFacebookF>
              <FaGithub className="mx-1"></FaGithub>
              <FaLinkedinIn className="mx-1"></FaLinkedinIn>
            </Row>
          </Card>
        </Col>
      </Row>
     
    </div>
  )

};
export default About;