import React from "react";
import '../Geral.css'

import { Dropdown, Row, Col, DropdownButton, Card} from 'react-bootstrap';
import './Events.css'
import {HiOutlineArrowNarrowRight, HiOutlinePlus} from "react-icons/hi";
import {IoMdMore} from "react-icons/io";
import {NavLink} from "react-router-dom";
import {AiFillPlayCircle} from "react-icons/ai";


const Events = () => {
  let data = JSON.parse(localStorage.getItem('event'));
    return (
      <div className="content">
        <h1 className="title">Eventos</h1>
        {data ? (
            <div>
                <div className="dashboardrow">
                    <Col>
                        <Card className={ `d${Math.floor(Math.random() * 4) + 1} dashboard` }>
                            <Card.Body>
                                <Card.Title>{data.name} <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight></Card.Title>
                                <Row>
                                    <Col className="dashinf">
                                        <Row>
                                            <h1 className="mr-2">25</h1>
                                            <h5 className="my-auto">novos<br/>uploads</h5>
                                        </Row>
                                    </Col>
                                    <Col className="dashinf">
                                        <Row>
                                            <h1 className="mr-2">+2</h1>
                                            <h5 className="my-auto">minutos<br/>de vídeo</h5>
                                        </Row>
                                    </Col>
                                    <Col className="dashinf">
                                        <Row>
                                            <h1 className="mr-2">2</h1>
                                            <h5 className="my-auto">novos<br/>colaboradores</h5>
                                        </Row>
                                    </Col>
                                    <Col className="dashinf">
                                        <Row>
                                            <h1 className="mr-2">1</h1>
                                            <h5 className="my-auto">partilha</h5>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </div>
                <Row className="mt-4">
                    <h3 className="subtitle">Os meus eventos</h3>
                    <DropdownButton
                        className="ml-auto"
                        title="Todos"
                    >
                        <Dropdown.Item href="#/action-1">Todos</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">A decorrer</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Concluidos</Dropdown.Item>
                    </DropdownButton>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4} xl={3}>
                        <NavLink to="/event">
                            <Card className="eventcard">
                                <Card.Img variant="top" src="imgs/placeholder-image.png" />
                                <Card.Body>
                                    <Row><Card.Title>{data.name} </Card.Title><IoMdMore className="ml-auto" size={18}> </IoMdMore></Row>
                                    <Card.Text>23.07.2021</Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </Col>
                </Row>

            </div>
        ):(
            <Row>
                <Col xs={12} sm={6} md={5} xl={3}>
                    <Card className={ `d2 tutorial` }>
                        <Card.Body>
                            <Card.Title>Bem-vindo ao eventmixer</Card.Title>
                            <p className="">Esta é a tua dashboard onde podes ver todos os teus eventos e a atividade recente. Para criares o teu primeito evento clica no butão “Criar Evento”.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={5} xl={3}>
                    <Card className={ `d1 tutorial`}>
                        <Card.Body>
                            <Card.Title>Como fazer o teu primeiro vídeo</Card.Title>
                            <p className="">Vídeo tutorial</p>
                            <AiFillPlayCircle size={60} className="mt-3"></AiFillPlayCircle>
                            <img
                                src="/imgs/tutorial.svg"
                                width="115"
                                className="tut-img"
                                alt="React Bootstrap logo"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            )}
            <NavLink to="/details">
        <button className="plusbtn">
          <HiOutlinePlus size={28}></HiOutlinePlus><h5 className="ml-3 text">Novo evento</h5>
        </button></NavLink>
      </div>
    )

};
export default (Events);
