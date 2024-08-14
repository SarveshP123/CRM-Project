import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import status1 from "../Images/status1.png"
import Swal from 'sweetalert2'
import service3 from "../Images/service3.gif"
import './SSS.css';
import { useNavigate } from "react-router";

export default function ServiceMangement(){
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [serviceInput, setServiceInput] = useState();

    const handleChangeService = (e) => {
        setServiceInput(e.target.value);
      };
      const handleClickService = async () => {
        console.log(serviceInput);
    
        try {
          const response = await axios.post(
            "http://localhost:3001/service/post/api",
            {
              serviceName: serviceInput,
              createdBy: userName
    
            }
          
          );
          console.log("data posted successfully", response.data);
          Swal.fire({
            title: "Good job!",
            text: "Your Service was added successfully!",
            icon: "success"
          });
        } catch (error) {
          console.log("Error while posting", error);
        }
        setShow1(false);
      };
  



    const inputValue = sessionStorage.getItem("inputValue");
  const email = sessionStorage.getItem("email");
  const userName =email|| inputValue ;
  // console.log(userName)
 var name =userName.match(/^([^@]*)@/)[1];

 const [serviceData, setServiceData] = useState([]);
 useEffect(() => {
    axios
      .post("http://localhost:3001/service/get/api", {
        createdBy: userName
      })
      .then((res) => {
        setServiceData(res.data); // Set the data property into sourceData
        // console.log(serviceData)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [serviceData]);


  const[selectedService,setSelectedService]=useState()
  const serviceChange=(e)=>{
  
    setSelectedService(e.target.value)



  }

  const deleteService=()=>{

    // console.log(selectedService)
  
    axios.post(`http://localhost:3001/service/delete/api/${selectedService}`)
    .then((res)=>{console.log(res.data)
  
      Swal.fire({
        title: "Good job!",
        text: "Your Service was deleted successfully!",
        icon: "success"
      });
    }
  
  )
    .catch((error)=>{console.log(error)})
    
  }
  const navigate=useNavigate();

  const dashboardClick=()=>{
  navigate("/DashBoard")
  }
  


return(
    <div style={{marginTop:"10px",backgroundColor:" #FEF4EA",height:"200vh",overflow:"hidden"}}>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "80px" }}>
  <h1 style={{ color: "black", textAlign: "center", fontFamily: "serif", marginRight: "20px" }}>SERVICE MANAGEMENT</h1>
  <Button variant="success" onClick={dashboardClick}>Dashboard</Button>
</div>
<Row>
    <Col xs={12} md={6} xl={5}>

      <img src={service3} className="service"></img>
    </Col>
    <Col xs={12} md={6} xl={6}>
    <Card  style={{marginTop:"20px"}}>
      <Card.Body>

        <Row>

           
            <Col xs={12} md={7} xl={7} style={{marginTop:"20px"}}> 
            <h3>View Service</h3>
            <Form.Select
                    aria-label="Default select example"
                    style={{ borderColor: "black" }}
                    name="service"
                    onChange={serviceChange}
                   
              
                  >
                    {serviceData.map((item, index) => (
                      <option key={index}  value={item._id}>{item.serviceName}</option>
                    ))}
                  </Form.Select>
</Col>
<Col xs={12} md={7} xl={7} style={{marginTop:"20px"}}> 
<h3>Add Service</h3>
<Button
                          variant="success"
                          onClick={handleShow1}
                        style={{ width:"100%" }}
                        >
                          Add service
                        </Button>
                  
</Col>
<img src={status1} style={{width:"150px",marginLeft:"30px"}}></img>



<Col xs={12} md={7} xl={7} > 
<h3>Delete Service</h3>
<Button
                          variant="danger"   
                        style={{ width:"100%" }}
                        onClick={deleteService}

                        >
                        Delete Service
                        </Button>
</Col>




        </Row>


    

      </Card.Body>
    </Card>
    </Col>
</Row>

<Modal show={show1} onHide={handleClose1} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                value={serviceInput}
                onChange={handleChangeService}
                placeholder="Enter your text here..."
                className="form-control"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-success"
                onClick={handleClickService}
              >
                save
              </Button>
              <Button variant="outline-danger" onClick={handleClose1}>
                Don't Save
              </Button>
            </Modal.Footer>
          </Modal>
   
           

    </div>
)

}