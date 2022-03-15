import React, { useState} from "react";
import '../Geral.css'
import './Editor.css'
import reactCSS from 'reactcss'
import {Button, Col, Form, FormControl, Image, InputGroup, Row, Tab, Tabs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {MdTextFields} from "react-icons/md";
import {FaRegStickyNote} from "react-icons/fa";
import {BiMusic, BiSearch, BiBold, BiItalic} from "react-icons/bi";
import {RiGalleryFill,RiArrowGoBackFill,RiArrowGoForwardLine} from "react-icons/ri";
import {HiPlay} from "react-icons/hi";
import {GrTextAlignFull} from "react-icons/gr";
import {IoChevronBack} from "react-icons/io5";
import { SketchPicker } from 'react-color'


const Editor = (props) => {
  const {files} = (props.location.state)
  const[colors,setColor] = useState({
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    },
  })
  const handleClick = () => {
    setColor({...colors, displayColorPicker: !colors.displayColorPicker })
  };
  const handleClose = () => {
    setColor({ ...colors,displayColorPicker: false })
  };
  const handleChange = (color) => {
    setColor({...colors, color: color.rgb })
  };

  const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
  }
  const [dragAndDrop, setDragAndDrop] = useState( {initialDnDState} );
  const [list,setList] = useState([])
  const [music,setMusic] = useState(false)
  const [timeline,setTimeline] = useState(list)
  const [timelineSticker,setTimelineSticker] = useState(list)
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition, // set the draggedFrom position
      isDragging: true,
      originalOrder: timeline // store the current state of "list"
    });
    event.dataTransfer.setData("text/html", '');
  }
  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)
    ];
    if (draggedTo !== dragAndDrop.draggedTo){
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo
      })
    }
  }
  const onDrop = () => {
    setTimeline(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });
  }
  const addTrack = () => {
    setMusic(true);
  }

  const thumbs = files.map(file => (
      <Col xs={6} className="pr-1" key={file.name} onClick={()=>{setTimeline([...timeline,file]);console.log(timeline)}}>
        <Image src={file.preview} className="w-100 files"/>
      </Col>
  ));
  const time = timeline.map((file,index) => (
      <div data-position={index} draggable="true" onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}  className="h-100 d-inline-block">
        <Image src={file.preview} className="media-tl" rounded/>
      </div>
  ));
  const sticker = timelineSticker.map((file,index) => (
      <div className="element-block el-sticker">
      </div>
  ));
  const [timelineText,setTimelineText] = useState(list)
  const texts = timelineText.map((file,index) => (
      <div className="element-block el-text">
      </div>
  ));

  if (timeline.length > 0){
  var divStyle = {
    backgroundImage: 'url(' + timeline[0].preview + ')'
  };
  }
  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '36px',
        borderRadius: '2px',
        background: `rgba(${ colors.color.r }, ${ colors.color.g }, ${ colors.color.b }, ${ colors.color.a })`,
      },
      swatch: {
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  return (
      <div className="editor">
    <div className="editor-content">
      <Row>
        <NavLink to="/event" className=""><IoChevronBack className="mr-3 back" size={30}> </IoChevronBack></NavLink>
          <h1 className="title-editor">Nos Alive</h1>
        <Row className="ml-auto seta">
          <RiArrowGoBackFill  size={30} ></RiArrowGoBackFill>
          <RiArrowGoForwardLine size={30}></RiArrowGoForwardLine>
        </Row>
            <NavLink to="/event" className="btnlink">
              <button className="savebtn">
                Salvar
              </button>
            </NavLink>
      </Row>
        <div className="editor-sec">
          <Row className="box-shadow-editor pt-4 px-4 ">
            <Col xs={12} md={8} className="pr-5 pl-3 editor-box bg-gray">
              <div className="video-wrapper">
                {timeline.length > "0" ?(
                    <div className="img-fluid" style={divStyle}>
                    </div>
                ):(
                    <div className="wrapper"></div>
                )}
              </div>
              <div className="mt-1 tl-container">
                <div className="tl-icons p-2">
                  <MdTextFields size="19" className="timeline-icon mb-2"/>
                  <FaRegStickyNote size="19" className="timeline-icon mb-2"/>
                  <BiMusic size="19" className="timeline-icon mb-2"/>
                  <RiGalleryFill  size="19" className="timeline-icon my-4"/>
                </div>
                <div  className="d-inline-block timeline-scroll">
                  <Row className="mt-1 element-row">
                      {texts}
                  </Row>
                  <Row className="mt-1 element-row">
                    {sticker}
                  </Row>
                  <Row className="mt-1 element-row">
                    {music ? (
                        <div className="element-block el-music w-100"></div>
                    ):(null)
                    }
                  </Row>
                  <Row className="mt-1 media-row">
                    <Row>
                      {time}
                    </Row>
                  </Row>
                  <div className='ruler'>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                      <div className='mm'></div>
                    </div>
                    <div className='cm'>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="p-0 pl-4">
              <Row className="h-100 w-100 editing-func">
                <Tabs defaultActiveKey="galeria" id="uncontrolled-tab-example" className="mt-1">
                  <Tab className="tab-logo" href="/events" title={
                    <span>
                      <img
                        src="/logo/svg/em_icon.svg"
                        width="60"
                        className="tab-logo"
                        alt="React Bootstrap logo"
                      />{" "}
                    </span>
                  }>
                    </Tab>
                  <Tab className="tab-icon " eventKey="galeria" title={
                    <span>
                      <RiGalleryFill size="25" />{" "}
                    </span>
                  }>
                      <div className="gallery-editor">
                        <Row className="contents gallery-editor">
                            {thumbs}
                        </Row>
                      </div>
                  </Tab>
                  <Tab className="tab-icon" eventKey="tal" title={
                    <span>
                      <MdTextFields size="25" />{" "}
                    </span>
                  }>
                    <div>
                        <h4 className="text-light font-weight-light mb-2">Layout de Texto</h4>
                        <div className="textl-container">
                            <Row className="textl-scroll">
                                <div onClick={()=>{setTimelineText([...timelineText,"imgs/LT1.png"]);console.log(timelineText)}}><Image src="imgs/LT1.png" width="120px"/></div>
                                <div onClick={()=>{setTimelineText([...timelineText,"imgs/LT2.png"])}}><Image src="imgs/LT2.png" width="120px"/></div>
                                <div onClick={()=>{setTimelineText([...timelineText,"imgs/LT3.png"])}}><Image src="imgs/LT3.png" width="120px"/></div>
                                <div onClick={()=>{setTimelineText([...timelineText,"imgs/LT4.png"])}}><Image src="imgs/LT4.png" width="120px"/></div>
                            </Row>
                        </div>
                        <Form className="mt-3">
                            <Form.Group >
                                <h4 className="text-light font-weight-light mb-2">Texto</h4>
                                <Form.Control className="text-form" type="text" placeholder="Título"/>
                            </Form.Group>
                            <Row className="txt-options">
                                <Form.Group className="col col-xs-6">
                                    <h4 className="text-light font-weight-light mb-2">Fonte</h4>
                                    <Form.Control className="text-form" type="text" placeholder="Fonte"/>
                                </Form.Group>
                                <Form.Group className="col col-xs-3">
                                    <h4 className="text-light font-weight-light mb-2">Tamanho</h4>
                                    <Form.Control className="text-form" type="text" placeholder="20"/>
                                </Form.Group>
                                <div className="col col-xs-3 txt-icon-div">
                                    <Row className="txt-icons">
                                        <BiBold></BiBold>
                                        <BiItalic></BiItalic>
                                        <GrTextAlignFull></GrTextAlignFull>
                                    </Row>
                                </div>
                            </Row>
                        </Form>
                      <div>
                        <h4 className="text-light font-weight-light mb-2">Cor</h4>
                        <div style={ styles.swatch } onClick={ handleClick }>
                          <div style={ styles.color } />
                        </div>
                        { colors.displayColorPicker ? <div style={ styles.popover }>
                          <div style={ styles.cover } onClick={ handleClose }/>
                          <SketchPicker color={ colors.color } onChange={ handleChange } />
                        </div> : null }
                      </div>

                    </div>
                  </Tab>
                  <Tab className="tab-icon" eventKey="tasl" title={
                    <span>
                      <FaRegStickyNote size="25" />{" "}
                    </span>
                  }>
                    <div>
                      <h4 className="text-light font-weight-light">Stickers</h4>
                      <InputGroup className="my-3 mb-5 search-input form-control">
                        <FormControl
                            placeholder="Procurar stickers..."
                            aria-label="Procurar stickers"
                            aria-describedby="basic-addon2"
                            className="add"
                        />
                        <InputGroup.Append>
                          <Button className="send" variant="outline-secondary"><BiSearch size={25}> </BiSearch></Button>
                        </InputGroup.Append>
                      </InputGroup>
                      <Row>
                        <Col xs={6} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker1.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker1.svg"
                              className="w-100 mb-2"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={6} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker2.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker2.svg"
                              className="w-100 mb-2"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker3.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker3.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker4.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker4.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker5.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker5.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker6.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker6.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker7.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker7.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker8.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker8.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker9.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker9.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker10.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker10.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker11.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker11.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker12.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker12.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker13.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker13.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                        <Col xs={3} onClick={()=>{setTimelineSticker([...timelineSticker,"/imgs/sticker14.svg"]);console.log(timelineSticker)}}>
                          <img
                              src="/imgs/sticker14.svg"
                              className="w-100 mb-5"
                              alt="React Bootstrap logo"
                          />{" "}
                        </Col>
                      </Row>
                    </div>
                  </Tab>
                  <Tab className="tab-icon" eventKey="tfal" title={
                    <span>
                      <BiMusic size="25" />{" "}
                    </span>
                  }>
                    <div>
                      <h4 className="text-light font-weight-light">Musica</h4>
                      <InputGroup className="my-3 mb-4 search-input form-control">
                        <FormControl
                            placeholder="Procurar musicas..."
                            aria-label="Procurar musicas"
                            aria-describedby="basic-addon2"
                            className="add"
                        />
                        <InputGroup.Append>
                          <Button className="send" variant="outline-secondary"><BiSearch size={30}> </BiSearch></Button>
                        </InputGroup.Append>
                      </InputGroup>
                        <Row className="mb-3" onClick={addTrack}>
                          <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                          <div className="ml-3">
                            <p className="text-light font-weight-light">Nome da música</p>
                            <p className="text-light font-weight-lighter">Artista</p>
                          </div>
                          <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                        </Row>
                      <Row className="mb-3" onClick={addTrack}>
                        <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                        <div className="ml-3">
                          <p className="text-light font-weight-light">Nome da música</p>
                          <p className="text-light font-weight-lighter">Artista</p>
                        </div>
                        <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                      </Row>
                      <Row className="mb-3" onClick={addTrack}>
                        <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                        <div className="ml-3">
                          <p className="text-light font-weight-light">Nome da música</p>
                          <p className="text-light font-weight-lighter">Artista</p>
                        </div>
                        <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                      </Row>
                      <Row className="mb-3" onClick={addTrack}>
                        <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                        <div className="ml-3">
                          <p className="text-light font-weight-light">Nome da música</p>
                          <p className="text-light font-weight-lighter">Artista</p>
                        </div>
                        <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                      </Row>
                      <Row className="mb-3" onClick={addTrack}>
                        <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                        <div className="ml-3">
                          <p className="text-light font-weight-light">Nome da música</p>
                          <p className="text-light font-weight-lighter">Artista</p>
                        </div>
                        <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                      </Row>
                      <Row className="mb-3" onClick={addTrack}>
                      <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                      <div className="ml-3">
                        <p className="text-light font-weight-light">Nome da música</p>
                        <p className="text-light font-weight-lighter">Artista</p>
                      </div>
                      <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                    </Row>
                      <Row className="mb-3" onClick={addTrack}>
                        <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                        <div className="ml-3">
                          <p className="text-light font-weight-light">Nome da música</p>
                          <p className="text-light font-weight-lighter">Artista</p>
                        </div>
                        <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                      </Row>
                      <Row className="mb-3" onClick={addTrack}>
                        <Image src="imgs/music-placeholder.png" width="45px" rounded/>
                        <div className="ml-3">
                          <p className="text-light font-weight-light">Nome da música</p>
                          <p className="text-light font-weight-lighter">Artista</p>
                        </div>
                        <HiPlay className="ml-auto music-track-icon" size={50}> </HiPlay>
                      </Row>
                    </div>
                  </Tab>
                </Tabs>
              </Row>
            </Col>
          </Row>
        </div>
    </div>
      </div>
  );
}
export default Editor;