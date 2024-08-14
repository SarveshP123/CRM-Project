import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import source1 from "../Images/source1.png"
import Swal from 'sweetalert2'
import './SSS.css';
import sourceimage6 from "../Images/sourceimage6.gif"
import { useNavigate } from "react-router";

export default function SourceMangement(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [sourceInput, setSourceInput] = useState();

    const handleClickSource = async () => {
      console.log(sourceInput);
  
      // source post method
  
      try {
        const res = await axios.post("http://localhost:3001/source/post/api", {
          sourceName: sourceInput,
          createdBy: userName
  
        });
        console.log("data posted successfully", res.data);
        Swal.fire({
          title: "Good job!",
          text: "Your Source was added successfully!",
          icon: "success"
        });
      } catch (error) {
        console.log("Error while posting", error);
      }
      setShow(false);
    };
    const handleChangeSource = (e) => {
      setSourceInput(e.target.value);
    };



    const inputValue = sessionStorage.getItem("inputValue");
  const email = sessionStorage.getItem("email");
  const userName =email|| inputValue ;
  // console.log(userName)
 var name =userName.match(/^([^@]*)@/)[1];

    const [sourceData, setSourceData] = useState([]);
    useEffect(() => {
        axios
          .post("http://localhost:3001/source/get/api", { createdBy: userName })
          .then((res) => {
            setSourceData(res.data); // Set the data property into sourceData
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, [sourceData]);
      // console.log(sourceData)
    
      // service post
    const[selectedSource,setSelectedSource]=useState()
const sourceChange=(e)=>{

  setSelectedSource(e.target.value)
}


const deleteSource=()=>{

  // console.log(selectedSource)

  axios.post(`http://localhost:3001/source/delete/api/${selectedSource}`)
  .then((res)=>{console.log(res.data)

    Swal.fire({
      title: "Good job!",
      text: "Your Source was deleted successfully!",
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
  <h1 style={{ color: "black", textAlign: "center", fontFamily: "serif", marginRight: "20px" }}>SOURCE MANAGEMENT</h1>
  <Button variant="success" onClick={dashboardClick}>Dashboard</Button>
</div>
<Row>
    <Col xs={12} md={6} xl={5}>

    <img src={sourceimage6} className="service"></img>
    </Col>
    <Col xs={12} md={6} xl={6}>
    <Card style={{marginTop:"20px"}}>
      <Card.Body>

        <Row>

           
            <Col xs={12} md={7} xl={7} style={{marginTop:"20px"}}> 
            <h3>View Source</h3>
             <Form.Select aria-label="Default select example" style={{ borderColor: "black" }}
                        name="source"
                    onChange={sourceChange}
                    
                        >
                          
                          {sourceData.map((item, index) => (
                           
                            <option  key={index}  value={item._id} >{item.sourceName}</option>
                          ))}
                        </Form.Select>
</Col>
<Col xs={12} md={7} xl={7} style={{marginTop:"20px"}}> 
<h3>Add Source</h3>
<Button
                          variant="success"
                          onClick={handleShow}
                        style={{ width:"100%" }}
                        >
                          Add source
                        </Button>
                  
</Col>
<img src={source1} style={{width:"150px",marginLeft:"30px"}}></img>



<Col xs={12} md={7} xl={7} > 
<h3>Delete Source</h3>
<Button
                          variant="danger"   
                        style={{ width:"100%" }}
                        onClick={deleteSource}
                        >
                        Delete source
                        </Button>
</Col>




        </Row>


    

      </Card.Body>
    </Card>
    </Col>
</Row>

<Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add source</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                onChange={handleChangeSource}
                value={sourceInput}
                placeholder="Enter your text here..."
                className="form-control"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-success" onClick={handleClickSource}>
                save
              </Button>
              <Button variant="outline-danger" onClick={handleClose}>
                Don't Save
              </Button>
            </Modal.Footer>
          </Modal>
          
   
           

    </div>
)

}