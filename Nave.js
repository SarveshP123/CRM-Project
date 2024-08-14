import React, { useEffect } from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { useNavigate,useLocation  } from 'react-router';
import logo from "../Images/logo.png"
import './Nav.css';
import { ImHome } from "react-icons/im";
import { MdManageAccounts } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineMenu } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";
import logout1 from "../Images/logout1.jpg"
import menu3 from "../Images/menu3.gif"
import dashboard1 from "../Images/dashboard1.png"
import leaddetails from "../Images/leaddetails.png"
import source1 from "../Images/source1.png"
import status1 from "../Images/status1.png"
import login from "../Images/login.jpg"
import status2 from "../Images/status2.png"
import sourcestatics1 from "../Images/sourcestatics1.png"
import servicestatics from "../Images/servicestatics.png"
import statusstatics from "../Images/statusstatics.png"
import Dropdown from 'react-bootstrap/Dropdown';
import resource1 from "../Images/resource1.png"
import statics from "../Images/statics.png"
import axios from 'axios';
import leadreports from "../Images/leadreports.png"
import leadreports1 from "../Images/leadreports1.png"
import sourcereports from "../Images/sourcereports.png"
import servicereports from "../Images/servicereports.png"


function Nave() {

  const location = useLocation();

  const isMainComponent = location.pathname === "/";
    const navigate=useNavigate();

const dashboardClick=()=>{
navigate("/DashBoard")
}
const leadClick=()=>{
  navigate("/Lead")
  
}
const statusClick=()=>{
  navigate("/StatusManagement")
}
const sourceClick=()=>{
  navigate("/SourceManagement")
  
}
const serviceClick=()=>{
  navigate("/ServiceManagement")
 
}
const leadSourceClick=()=>{
  navigate("/SourceGraph")
 
}

const leadServiceClick=()=>{
  navigate("/ServiceGraph")
 
}
const leadStatusClick=()=>{
  navigate("/StatusGraph")
 
}

const leadSourceReports=()=>{
  navigate("/SourceReports")
}
const leadServiceReports=()=>{
  navigate("/ServiceReports")
}
const leadStatusReports=()=>{
  navigate("/StatusReports")
}






    const userName = sessionStorage.getItem("inputValue") || sessionStorage.getItem("email");
    const name = userName ? userName.match(/^([^@]*)@/)?.[1] : "Guest";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuHide = location.pathname === "/" || location.pathname === "/SignIn";

    return (
      <div>
      <Navbar fixed="top" className="navbar bg-body-tertiary" style={{overflow:"hidden"}}>
        <Container>
          {!menuHide && (
            <a>
              <img src={menu3} onClick={handleShow} className="menu" />
            </a>
          )}
    
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ fontFamily: "serif" }}>
                <strong>MENU</strong>
              </Offcanvas.Title>
            </Offcanvas.Header>
    
            <Offcanvas.Body style={{ backgroundColor: "#FEF4EA" }}>
              <div>

              <Navbar>
  <Container>
    <Navbar.Brand onClick={dashboardClick} className="Slidebar custom-outline-dark"   >
      <img
        style={{ width: "30px", marginRight: "15px" }}
        src={dashboard1}
      />
      DASHBOARD
    </Navbar.Brand>
  </Container>
</Navbar>
<br />
    
                <Navbar>
                  <Container>
                    <Navbar.Brand className="Slidebar custom-outline-dark" onClick={leadClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px" }}
                        src={leaddetails}
                      />
                      LEAD DETAILS
                    </Navbar.Brand>
                  </Container>
                </Navbar>
                <br />
    <div>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="Slidebar">
                    <img
                      src={resource1}
                      style={{ width: "30px", marginRight: "15px" }}
                    />
                    Resource Management
                  </Dropdown.Toggle>
    
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={statusClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={status2}
                      />
                      STATUS MANAGEMENT
                    </Dropdown.Item>
                    <Dropdown.Item onClick={sourceClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={source1}
                      />
                      SOURCE MANAGEMENT
                    </Dropdown.Item>
                    <Dropdown.Item onClick={serviceClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={status1}
                      />
                      SERVICE MANAGEMENT
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <br />
                </div>


    &nbsp;
                <Dropdown style={{marginTop:"-10px"}}>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="Slidebar">
                    <img
                      src={statics}
                      style={{ width: "30px", marginRight: "15px" }}
                    />
                    Statics Management
                  </Dropdown.Toggle>


             
                  <Dropdown.Menu >
                    <Dropdown.Item onClick={leadStatusClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px"}}
                        src={statusstatics}
                      />
                      LEAD STATUS STATICS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={leadSourceClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={sourcestatics1}
                      />
                      LEAD SOURCE STATICS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={leadServiceClick}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={servicestatics}
                      />
                      LEAD SERVICE STATICS
                    </Dropdown.Item>
                  </Dropdown.Menu>
              
                </Dropdown>




















                &nbsp;  &nbsp;
                <Dropdown style={{marginTop:"10px"}}>
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className="Slidebar">
                    <img
                      src={leadreports1}
                      style={{ width: "30px", marginRight: "15px" }}
                    />
                    Lead Reports 
                  </Dropdown.Toggle>


             
                  <Dropdown.Menu >
                    <Dropdown.Item onClick={leadStatusReports}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px"}}
                        src={leadreports}
                      />
                      LEAD STATUS REPORTS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={leadSourceReports}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={sourcereports}
                      />
                      LEAD SOURCE REPORTS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={leadServiceReports}>
                      <img
                        style={{ width: "30px", marginRight: "15px",marginTop:"20px" }}
                        src={servicereports}
                      />
                      LEAD SERVICE REPORTS
                    </Dropdown.Item>
                  </Dropdown.Menu>
              
                </Dropdown>

              </div>
            </Offcanvas.Body>
          </Offcanvas>






    
          <img className="navlogo" src={logo} />
          <Navbar.Brand className="pulse" href="#home">
            Client Pulse
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {isMainComponent ? (
                <a href="/Signup">
                  <img className="login" src={login} alt="login" />
                </a>
              ) : (
                <a href="./">
                  <img className="logout" src={logout1} alt="logout" />
                </a>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
    
    )
}

export default Nave