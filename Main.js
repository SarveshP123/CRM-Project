import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Main.css';
import computer from "../Images/computer.png"
import Card from 'react-bootstrap/Card';
import leadmanagement from "../Images/leadmanagement.png"
import filter from "../Images/filter.png"
import leadintegration from "../Images/lead integration.png"
import customization from "../Images/customization.png"
import statushistory from "../Images/statushistory.png"
import dashboard from "../Images/dashboard.png"
import leadentry from "../Images/leadentry.png"
import leadstatus from "../Images/leadstatus.png"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import animated2 from "../Images/animated2.gif"
import animated4 from "../Images/animated4.gif"
import animated3 from "../Images/animated3.gif"
import Carousel from 'react-bootstrap/Carousel';
import cr1 from "../Images/cr1.png"


function Main() {

  const navigate=useNavigate();

  const dashNavigate=()=>{
    navigate("/Signup")
  }

  return (
    <div style={{backgroundColor:"#FEF4EA",marginTop:"-20px",overflow:"hidden"}}>
      <h1 className='heading'>Best CRM Software & Tools for Your  Team</h1>
      


<Row>
<Col xs={12} md={6} xl={1}>  </Col>
    <Col xs={12} md={6} xl={5} className='paragraph'>
    <h5 style={{color:"black",fontFamily:"serif",}}>Think CRM software is just about contact management? Think again. Client Pulse CRM has free tools for everyone on your team, and it’s 100% free. Here’s how our free CRM solution makes your job easier.</h5>

    </Col>
    

    <Col xs={12} md={6} xl={6}>
        <img className='computer' src={computer}></img>
    </Col>
</Row>






<h1 className='heading'>Our Features</h1>


<Row>
  <Col xs={12} md={6} xl={3}>
  <Card className='maincard' >
    <img className='image' src={leadmanagement}></img>
      <Card.Header style={{color:"green"}}><h3>Lead management</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        Create and manage leads effortlessly with a simple form for input and a table for organized display, streamlining the lead tracking process.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={6} xl={3}>
  <Card className='maincard' >
    <img className='image' src={filter}></img>
      <Card.Header style={{color:"green"}}><h3>Filters</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        Efficiently filter lead details based on specific requirements, ensuring targeted analysis and streamlined lead management processes.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={6} xl={3}>
  <Card className='maincard' >
    <img className='image' src={leadintegration}></img>
      <Card.Header style={{color:"green"}}><h3>Integrations</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        Enhance lead management with new fields for name, mobile number, lead source, service, and status, empowering comprehensive tracking and analysis in a streamlined interface.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </Col>
  <Col xs={12} md={6} xl={3}>

  <Card className='maincard' >
    <img className='image' src={customization}></img>
      <Card.Header style={{color:"green"}}><h3>Fully Customisable</h3></Card.Header>
      <Card.Body>
        <Card.Text>
        Tailor your CRM to your exact needs, offering full customization for lead status, source, service, and personal details, ensuring a tailored solution for comprehensive lead management.
        </Card.Text>
       
      </Card.Body>
    </Card>
  </Col>
</Row>

<Row>
<Col xs={12} md={6} xl={3}>

<Card className='maincard' >
  <img className='image' src={statushistory}></img>
    <Card.Header style={{color:"green"}}><h3>Status History</h3></Card.Header>
    <Card.Body>
      <Card.Text>
      Manually updating lead status and description triggers status history recording for transparent tracking and analysis.
      </Card.Text>
     
    </Card.Body>
  </Card>
</Col>

<Col xs={12} md={6} xl={3}>

<Card className='maincard' >
  <img className='image' src={dashboard}></img>
    <Card.Header style={{color:"green"}}><h3>Dash Board</h3></Card.Header>
    <Card.Body>
      <Card.Text>
      The admin dashboard displays lead counts categorized by source, service, and status, along with their corresponding names for efficient monitoring and analysis.
      </Card.Text>
     
    </Card.Body>
  </Card>
</Col>


<Col xs={12} md={6} xl={3}>

<Card className='maincard' >
  <img className='image' src={leadentry}></img>
    <Card.Header style={{color:"green"}}><h3>Lead Entry</h3></Card.Header>
    <Card.Body>
      <Card.Text>
      
Enhance lead entry efficiency by incorporating source, service, and status fields, facilitating comprehensive lead management and analysis.
      </Card.Text>
     
    </Card.Body>
  </Card>
</Col>


<Col xs={12} md={6} xl={3}>

<Card className='maincard' >
  <img className='image' src={leadstatus}></img>
    <Card.Header style={{color:"green"}}><h3>Lead Status</h3></Card.Header>
    <Card.Body>
      <Card.Text>
      
      update lead status when transitioning from one stage to another, ensuring seamless progress tracking and efficient lead management.
      </Card.Text>
     
    </Card.Body>
  </Card>
</Col>

</Row>



<Row>
  <Col xs={12} md={12} xl={4}></Col>
  <Col xs={12} md={12} xl={4}>
    

  <div style={{marginTop:"30px"}} className="d-grid gap-2">
      <Button variant="success" size="lg" onClick={dashNavigate}>
        Get Started free
      </Button>
  
    </div>
  </Col>
  <Col xs={12} md={12} xl={4}></Col>
</Row>


<div style={{backgroundColor:"white"}}>

<h1 className='heading'>More about our Features</h1>

<Row>
  <Col xs={12}md={6} xl={1}></Col>
  <Col xs={12}md={6} xl={4}>
<img className='animated2' src={animated2}></img>

  </Col>
  <Col xs={12}md={6} xl={6}>
    <h2 style={{color:"black",marginTop:"10px"}}> Lead Management Section</h2>
    <p style={{color:"black",marginTop:"10px"}}><strong>Create New Leads:</strong> Users can input lead details such as name, email, source, service, and status. Upon submission, the lead is added to the system.</p>

    <p style={{color:"black",marginTop:"10px"}}><strong>Update Lead Status: </strong>
    Users can update the status of existing leads dynamically. This action triggers a status change in the database and updates the status history.
     </p>

     <p style={{color:"black",marginTop:"10px"}}><strong>View Lead Details:  </strong>
     All lead details including name, email, source, service, current status, and status history are displayed in a tabular format. Users can easily review and manage leads.
     </p>
  </Col>
  <Col xs={12}md={6} xl={1}></Col>
</Row>



<hr></hr>

<Row style={{marginTop:"30px"}}>
<Col xs={12} md={6} xl={1}></Col>
<Col xs={12} md={6} xl={6}>
<h2 style={{color:"black",marginTop:"10px"}}> Admin Dashboard</h2>
    <p style={{color:"black",marginTop:"10px"}}><strong>Monitor Lead Status: </strong>  A summary of lead statuses is provided, showing how many leads are in each status category (e.g., new, in progress, closed).</p>


    <p style={{color:"black",marginTop:"10px"}}><strong>Access Detailed Lead Reports:  </strong>  Administrators can access detailed reports containing lead details, status history, and any other relevant metrics. These reports may be customizable and exportable for further analysis.</p>


    <p style={{color:"black",marginTop:"10px"}}><strong>Manage Users and Permissions: </strong> Depending on the system's complexity, administrators may have the ability to manage user accounts and permissions, granting or revoking access to certain features or data.</p>

</Col>
<Col xs={12} md={6} xl={4}>
<img className='animated3' src={animated4}></img>
</Col>
<Col xs={12} md={6} xl={1}></Col>
</Row>

<hr></hr>

<Row>
<Col xs={12}md={6}xl={1}></Col>
<Col xs={12}md={6}xl={4}>
<img className='animated4' src={animated3}></img>

</Col>
<Col xs={12}md={6}xl={6}>
<h2 style={{color:"black",marginTop:"30px"}}> Status History Display</h2>
<p style={{color:"black"}}>The frontend interface should be user-friendly, with intuitive controls for creating, updating, and viewing lead details. It should also provide clear visual cues for lead status changes and highlight important information such as overdue leads or critical updates.</p>
<p style={{color:"black"}}>The status history of each lead is prominently displayed. This allows users to track changes in lead status over time, providing transparency and accountability in the lead management process.</p>
<p style={{color:"black"}}>By implementing these features and presenting relevant content, users can effectively manage lead details, track status changes, and gain insights from lead data in the admin dashboard.</p>

</Col>
<Col xs={12}md={6}xl={1}></Col>
</Row>
  
</div>



<Row>
  <Col xs={12} md={12} xl={4}></Col>
  <Col xs={12} md={12} xl={4}>
    

  <div style={{marginTop:"30px"}} className="d-grid gap-2">
      <Button variant="success" size="lg" onClick={dashNavigate}>
        Get Started free
      </Button>
  
    </div>
  </Col>
  <Col xs={12} md={12} xl={4}></Col>
</Row>














    </div>
  )
}

export default Main
