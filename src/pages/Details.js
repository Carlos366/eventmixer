import React, { useState} from "react";
import '../Geral.css'
import './Details.css'
import {Form, Modal, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import { pt } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import {HiOutlineArrowNarrowLeft} from "react-icons/hi";
import {MdGroupAdd} from "react-icons/md";
import {BiSend} from "react-icons/bi";
import {FaUserCircle} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function Details() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [show, setShow] = useState(false);
  const [event, setEvent] = useState({name:"", description:"", type:"", location:"", generation: true});
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let data = JSON.parse(localStorage.getItem('user'));
  
  const onChangeName =e => {
    const nam = e.target.value;
    setEvent(prevState => {
      return { ...prevState, name: nam }
    });
  }

  const onChangeDescription =e => {
    const des = e.target.value;
    setEvent(prevState => {
      return { ...prevState, description: des }
    });
  }

  const onChangeType =e => {
    const typ = e.target.value;
    setEvent(prevState => {
      return { ...prevState, type: typ }
    });
  }

  const onChangeLocation =e => {
    const loc = e.target.value;
    setEvent(prevState => {
      return { ...prevState, location: loc }
    });
  } 

  const onChangeGeneration = e => {
    const gen = e.target.value;
    setEvent(prevState => {
      return { ...prevState, generation: gen }
    });
  }


  const onSubmit = e => {
    localStorage.setItem('event', JSON.stringify(event));
    localStorage.setItem('startDate', JSON.stringify(startDate));
    localStorage.setItem('endDate', JSON.stringify(endDate));
  };
  
  
  return (
    <div className="content">
      <h1 className="title">Novo evento</h1>
      <Row >
        <Col md={6} xs={12} className="pr-lg-5 px-md-3 px-sm-5">
          <Form>
            <Form.Group >
              <Form.Label>Nome do evento</Form.Label>
              <Form.Control type="text" placeholder="Nome" value={event.name} onChange={onChangeName} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={4} value={event.description} onChange={onChangeDescription} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Tipo de evento</Form.Label>
              <div className="custom-radio form-check">
                <input name="formHorizontalRadios" type="radio" id="formHorizontalRadios1" className="form-check-input custom-control-input" value="Concerto" onChange={onChangeType}/>
                <label className="custom-control-label" htmlFor="formHorizontalRadios1">Concerto</label>
              </div>
              <div className="custom-radio form-check">
                <input name="formHorizontalRadios" type="radio" id="formHorizontalRadios2" className="form-check-input custom-control-input" value="Festival" onChange={onChangeType}/>
                <label className="custom-control-label" htmlFor="formHorizontalRadios2">Festival</label>
              </div>
              <div className="custom-radio form-check">
                <input name="formHorizontalRadios" type="radio" id="formHorizontalRadios3" className="form-check-input custom-control-input" value="Viagem" onChange={onChangeType}/>
                <label className="custom-control-label" htmlFor="formHorizontalRadios3">Viagem</label>
              </div>
              <div className="custom-radio form-check">
                <input name="formHorizontalRadios" type="radio" id="formHorizontalRadios4" className="form-check-input custom-control-input" value="Outro" onChange={onChangeType}/>
                <label className="custom-control-label" htmlFor="formHorizontalRadios4">Outro:</label>
                <Form.Control as="input" className="outro" />
              </div>
            </Form.Group>

          </Form>
        </Col>
        <Col md={6} xs={12} className="pl-lg-5 px-md-3 px-sm-5">
          <Form>
            <Form.Group >
              <Form.Label>Localização</Form.Label>
              <Form.Control type="text" placeholder="Localização" value={event.location} onChange={onChangeLocation} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Duração do evento</Form.Label>
              <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                minimumDate={new Date()}
                minimumLength={1}
                format='dd MMM yyyy'
                locale={pt}
              >
                {({ startDateInputProps, endDateInputProps, focus }) => (
                  <div className='date-range'>
                    <Form.Control

                      className={'input' + (focus === START_DATE ? ' -focused' : '')}
                      {...startDateInputProps}
                      placeholder='Início'
                    />
                    <Form.Control
                      className={'input' + (focus === END_DATE ? ' -focused' : '')}
                      {...endDateInputProps}
                      placeholder='Fim'
                    />
                  </div>
                )}
              </DateRangePicker>
            </Form.Group>
            <Form.Group>
              <Form.Label>Geração de vídeo</Form.Label>
              <div className="switch-field">
                <input type="radio" id="radio-one" name="switch-one" value="yes" defaultChecked onChange={onChangeGeneration}/>
                <label htmlFor="radio-one">Automática</label>
                <input type="radio" id="radio-two" name="switch-one" value="no" onChange={onChangeGeneration}/>
                <label htmlFor="radio-two">Manual</label>
              </div>
              <p className="switch-info">A geração automática de vídeo utiliza os metadados das suas fotografias e vídeos premitindo organiza-las de forma cronológica na timeline do seu evento.</p>
            </Form.Group>
            <Row className="mt-5 btns">
              <Col xs={3} lg={2}>
                <a className="cbtn" onClick={handleShow}>
                  <MdGroupAdd size={25}> </MdGroupAdd>
                </a>
              </Col>
              <Col xs={9} lg={10}>
                <NavLink to="/templates">
                  <button className="tbtn" type="submit" onClick={onSubmit}>
                    <h5 className="text">Escolher Template</h5><HiOutlineArrowNarrowRight size={22} className="ml-1"></HiOutlineArrowNarrowRight>
                  </button>
                </NavLink>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <a onClick={handleClose}>
            <HiOutlineArrowNarrowLeft className="closebtn my-auto" size={35}> </HiOutlineArrowNarrowLeft>
          </a>
          <InputGroup className="my-3 form-control">
            <FormControl
              placeholder="Adicionar pessoas"
              aria-label="Adicionar pessoas"
              aria-describedby="basic-addon2"
              className="add"
            />
            <InputGroup.Append>
              <Button className="send" variant="outline-secondary"><BiSend size={25}> </BiSend></Button>
            </InputGroup.Append>
          </InputGroup>
          <Row className="mt-4">
            <FaUserCircle size={35} color="#574B9A"/>
            <h5 className="ml-3 my-auto name">{data.name} {data.lastname}</h5>
            <h5 className="ml-auto my-auto role">Administrador</h5>
          </Row>
          <Row className="mt-3">
            <FaUserCircle size={35} color="#574B9A"/>
            <h5 className="ml-3 my-auto name">Beatriz Santos</h5>
            <Form.Control as="select" className="ml-auto my-auto role">
              <option>Administrador</option>
              <option>Editor</option>
              <option selected="selected">Comentador</option>
            </Form.Control>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
    )
  }

export default (Details);