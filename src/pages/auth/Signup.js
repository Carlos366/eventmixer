import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { Form, Col, Row, Button } from 'react-bootstrap';
import './Login.css'

class Signup extends Component {

  userData;

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: ''
    }
  }

  // Form Events
  onChangeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeLastname(e) {
    this.setState({ lastname: e.target.value })
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    this.setState({
      name: '',
      lastname: '',
      email: '',
      password: ''
    })
  }

  // React Life Cycle
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        name: this.userData.name,
        lastname: this.userData.lastname,
        email: this.userData.email,
        password: this.userData.password
      })
    } else {
      this.setState({
        name: '',
        lastname: '',
        email: '',
        password: ''
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
  }

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
          <p className="text-light mt-5 text-center em_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent interdum ligula in erat tristique finibus. Proin pulvinar, est sit amet efficitur tincidunt, eros
            elit aliquet nunc, vel volutpat dui ex ac dolor. Nulla facilisi.
            <br/>
            <Button href="#login" className="lgbtn mt-5 mx-auto">
              Criar conta
            </Button>
          </p>
        </Col>
        <Col xs={12} md={6} lg={5} className="my-auto">
          <div className="login" id="login">
            <h2 className="mt-4">Criar conta</h2>
            <Form onSubmit={this.onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text"
                              placeholder="Nome"
                              value={this.state.name} onChange={this.onChangeName} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Apelido</Form.Label>
                <Form.Control type="text"
                              placeholder="Apelido"
                              value={this.state.lastname} onChange={this.onChangeLastname} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                              placeholder="Enter email"
                              value={this.state.email} onChange={this.onChangeEmail} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Palavra-passe</Form.Label>
                <Form.Control type="password"
                              placeholder="Password"
                              value={this.state.password} onChange={this.onChangePassword} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirmar palavra-passe</Form.Label>
                <Form.Control type="password"
                              placeholder="Password"/>
              </Form.Group>
              <NavLink to="/events">
                <Button className="w-100 loginbtn mb-4 mt-2"
                        variant="primary"
                        type="submit"
                        loadingText="A realizar login..."
                >
                  Criar conta
                </Button>
              </NavLink>
            </Form>
          </div>
        </Col>

      </Row>
    );
  }
}

export default Signup;
