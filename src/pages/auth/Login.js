import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {FaFacebookSquare} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

import { Form, Col, Row, Button } from 'react-bootstrap';
import './Login.css'

class Login extends Component {
  
  render() {
    return (
      <Row className="em">
        <Col xs={12} md={6} lg={7} className="embg" style={{
          backgroundImage: `linear-gradient(
      rgb(234, 92, 77, 0.85),
      rgb(234, 92, 77, 0.85)
    ),url("imgs/em_bg.jpg")`
        }}>
          <img
            src="/logo/svg/em_horizontal_w.svg"
            width="400"
            className="mx-auto px-5 logo_w"
            alt="React Bootstrap logo"
          />
          <p className="text-light mt-5 text-center em_desc">O eventmixer existe para te ajudar a criar e partilhar memórias dos teus eventos com os teus amigos e família.
            Junta-te a nós e começa a criar as tuas memórias!
            <br/>
            <Button href="#login" className="lgbtn mt-5 mx-auto">
              Iniciar sessão
            </Button>
          </p>
        </Col>
        <Col xs={12} md={6} lg={5} className="my-auto">
          <div className="login" id="login">
            <h2 className="mt-4">iniciar sessão</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                              placeholder="Enter email"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              placeholder="Password"/>
                <Form.Text className="text-muted text-right">
                  Esqueceste-te da <NavLink to="/password-reset/email">palavra-passe?</NavLink>
                </Form.Text>
              </Form.Group>
              <NavLink to="/events">
                <Button className="w-100 loginbtn mb-4 mt-2"
                        variant="primary"
                        type="submit"
                        loadingText="A realizar login..."
                >
                  Iniciar sessão
                </Button>
              </NavLink>
              <div className="d-flex">
                <hr className="my-auto flex-grow-1"/>
                <h5 className="text-center text-secondary mx-2">ou</h5>
                <hr className="my-auto flex-grow-1"/>
              </div>
              <Button className="fbbtn mb-3 mt-4 w-100"
              >
                <FaFacebookSquare className="mr-3" size={25}></FaFacebookSquare><h5>Continuar com Facebook</h5>
              </Button>
              <Button className="glbtn mb-3 w-100"
              >
                <FcGoogle className="mr-3" size={25}></FcGoogle><h5>Continuar com Google</h5>
              </Button>
              <Row className="my-5">
                <h5 className="text-secondary mr-auto inline">Não tens conta?</h5>
                <NavLink className="text-right ml-auto inline" to="/signup">Regista-te</NavLink>
              </Row>
            </Form>
          </div>
        </Col>

      </Row>
    );
  }
}

export default Login;
