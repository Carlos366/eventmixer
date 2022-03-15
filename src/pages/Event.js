import React,{useEffect,useState} from "react";
import '../Geral.css'
import './Event.css'
import {NavLink} from "react-router-dom";
import {Image, Col, Row, Tabs, Tab} from "react-bootstrap";
import {IoMdMore} from "react-icons/io";
import {FiEdit, FiShare2, FiUploadCloud} from "react-icons/fi";
import {useDropzone} from 'react-dropzone'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";


const Event = () => {
  const [files, setFiles] = useState([]);

  let data = JSON.parse(localStorage.getItem('event'));
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  const thumbs = files.map(file => (
      <div key={file.name}  className="col col-6">
          <Image src={file.preview} className="files"/>
      </div>
  ));
  useEffect( () => {
    // Make sure to revoke the data uris to avoid memory leaks
    console.log(files)
  }, [files]);

  return (
    <div className="content">
      <Row>
          <h1 className="title">{data.name}</h1>
          <IoMdMore className="ml-1 more" size={30}> </IoMdMore>
          <NavLink to={{
            pathname:"/editor",
            state:{
              files: files
            }
          }} className="ml-auto">
            <button className="editbtn mr-4">
              <FiEdit size={22} className="mr-3"> </FiEdit><h5 className="text">Editar</h5>
            </button>
            <button className="sharebtn">
              <FiShare2 size={22} className="mr-3"> </FiShare2><h5 className="text">Partilhar</h5>
            </button>
          </NavLink>
      </Row>
      <div className="event">
      <Row className="mb-5 box-shadow">
        <Col xs={12} md={8} className="p-0 bg-gray">
          <Image src="imgs/placeholder-image.png" className="h-100 w-100"/>
        </Col>
        <Col xs={12} md={4} className="p-0">
          <Row className="h-100 w-100 event-tabs">
          <Tabs defaultActiveKey="galeria" id="uncontrolled-tab-example" className="mt-1">
            <Tab eventKey="galeria" title="Galeria">
                <section className="container">
                  <div {...getRootProps({classname:'dropzone'})}>
                      <input {...getInputProps()}/>
                      <FiUploadCloud className="mx-auto mb-2" size={30}></FiUploadCloud>
                      <p className="text-center mb-1">Clica ou arrasta os teus ficheiros para fazer upload!</p>
                  </div>
                </section>
              <div className="gallery">
                <Row className="contents gallery">
                     {thumbs}
                </Row>
              </div>
            </Tab>
            <Tab eventKey="comentarios" title="Comentários">
                <div style={{ ...styles, position: "relative", height: "400px" }}>
                    <MainContainer>
                        <ChatContainer>
                            <MessageList >
                                <Message
                                    model={{
                                        message: "Bom dia pessoal",
                                        sentTime: "just now",
                                        sender: "Joe",
                                    }}
                                />
                                <Message
                                model={{
                                    message: "Está giro",
                                    sentTime: "just now",
                                    sender: "Joe",
                                }}
                            />
                                <Message
                                    model={{
                                        message: "Parabéns",
                                        sentTime: "just now",
                                        sender: "Joe",
                                    }}
                                />
                            </MessageList>
                            <MessageInput  placeholder="Escreve aqui a tua mensagem" />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </Tab>
          </Tabs></Row>
        </Col>
      </Row>
      </div>
    </div>
  )

};
export default (Event);