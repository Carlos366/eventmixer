import React from "react";

import { NavLink,useLocation } from "react-router-dom";


import { Nav, Navbar, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { BiCalendarStar } from "react-icons/bi";
import {HiOutlineTemplate, HiOutlineMenuAlt2} from "react-icons/hi";
import { RiInformationLine } from "react-icons/ri";
import {CgClose} from "react-icons/cg";
import {FiLogOut} from "react-icons/fi";

import './Header.css' 

const Header = () => {
  const location = useLocation();
  let data = JSON.parse(localStorage.getItem('user'));
  
  
  return (
    <div>
      {location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/editor" && (
      <Navbar fixed="top" expand="md" className="bg-white">
        {window.innerWidth >= 769.98 && (
        <Navbar.Brand className="logo" href="/events">
          <img
            src="/logo/svg/em_horizontal.svg"
            width="220"
            className="d-inline-block align-top my-1"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>)}
        <Row className="ml-md-auto">
           <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menubutton">
              <HiOutlineMenuAlt2 className="menu" color="#574B9A"></HiOutlineMenuAlt2>
              <CgClose className="closemenu" color="#574B9A"></CgClose>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav ml-md-auto" activeKey={location.pathname}>
              <div className="user">
                <div className="usersm">
                <FaUserCircle className="usericonxl" color="#574B9A"/>
                <div className="my-4">
                    <h4 className="text-center nome">{data.name} {data.lastname}</h4>
                    <p className="text-center">{data.email}</p>
                  <NavLink to="/">
                    <button className="logout">
                      <FiLogOut size={20}></FiLogOut><h5 className="ml-1 text">Terminar sessão</h5>
                    </button></NavLink>
                </div>
              </div>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-contained" className="userxl">
                      <Popover.Content>
                        <FaUserCircle className="usericonxl mb-3" color="#574B9A"/>
                        <h4 className="text-center nome">{data.name} {data.lastname}</h4>
                        <p className="text-center">{data.email}</p>
                        <NavLink to="/">
                        <button className="logout mt-4">
                          <FiLogOut size={20}></FiLogOut><h5 className="ml-1 text">Terminar sessão</h5>
                        </button></NavLink>
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <FaUserCircle className="usericonsm userxl" color="#574B9A"/>
                </OverlayTrigger>
              </div>
              <div className="navlinks">
                <Nav.Link  href="/events"><Row className="ml-3"><BiCalendarStar className="navicon mr-2 mt-1"/>Eventos</Row></Nav.Link>
                <Nav.Link href="/templates"><Row className="ml-3"><HiOutlineTemplate className="navicon mr-2 mt-1"/> Templates</Row></Nav.Link>
                <Nav.Link href="/about"><Row className="ml-3"><RiInformationLine className="navicon mr-2 mt-1"/> Sobre</Row></Nav.Link>
              </div>
            </Nav>
            </Navbar.Collapse>
           </div>
        </Row>
      </Navbar>)}
    </div>
  );
};

export default (Header);
