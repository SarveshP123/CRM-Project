import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from "yup";
import { ErrorMessage, Formik } from "formik";
import { Container } from "react-bootstrap";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import login1 from "../Images/login1.webp"
import login2 from "../Images/login2.gif"
import login3 from "../Images/login3.gif"
import login4 from "../Images/login4.gif"
import './Signin.css';

export default function SignIn() { 
    const navigate = useNavigate();


    let [user, setUser] = useState({
        UserName: "",
        Password: "",
        ConfirmPassword: "",
        Email: "",
        MobileNo: ""
    });

    let schema = yup.object().shape({
        UserName: yup.string().required("User name is required"),
        Password: yup.string().required("Password is required"),
        ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match').required("Confirm Password is required"),
        Email: yup.string().email().required("Email should be valid"),
        MobileNo: yup.string()
        .matches(/^[0-9]+$/, "Mobile number must be only digits")
        .length(10, "Mobile number must be exactly 10 digits")
        .required("Mobile number is required")
    });

    let handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    let handleSubmit = () => {

        const data={
            mailId:user.Email,
            mobileNo:user.MobileNo,
            userName:user. UserName,
            password:user.Password,
            confirmPassword:user.ConfirmPassword
            
        }

axios.post("http://localhost:3001/user/post/api",data)
.then((res)=>{console.log(res.data)
    Swal.fire({
        title: "Good job!",
        text: "Your Details Registered!",
        icon: "success"
      });
      navigate("/Signup")
})
.catch((error)=>{console.log(error);
    Swal.fire({
        icon: "error",
        title: "You are already Registered",
        text: "Go to log in option!",
      });
      navigate("/Signup")
})
        // console.log(user);
    };

    return (
        <div>
            <Row style={{marginTop:"100px" }}>
                <Col xs={6} md={6} xl={6} >
                <h2 style={{ textAlign: "center", color: "black" }}>STEPS TO ACCESS OUR CRM DASHBOARD</h2>
                    <div className="move">
<img src={login1} className="signinimage" ></img>
<img src={login2}className="signinimage"></img>
<img src={login3}className="signinimage" ></img>
<img src={login4} className="signinimage"></img>
</div>
                </Col>

                <Col xs={12} md={12} xl={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "1px", height: "70%", backgroundColor: "#000" }}></div>
                </Col>

                <Col xs={12} md={12} xl={5} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ width: "100%" }}>
                        <Row>
                            <Col xs={12} md={12} xl={1}></Col>
                            <Col xs={12} md={12} xl={8}>
                                <h2 style={{ textAlign: "center", color: "black" }}>CREATE AN ACCOUNT</h2>
                                <Formik initialValues={user} onSubmit={handleSubmit} validationSchema={schema}>
                                    {({ handleSubmit, handleChange, values }) => (
                                        <Container>
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label style={{ color: "black" }}>User Name</Form.Label>
                                                    <Form.Control 
                                                        name="UserName" 
                                                        value={values.UserName} 
                                                        style={{ height: "50px", width: "300px" }} 
                                                        type="text" 
                                                        placeholder="Enter username" 
                                                        onChange={(e) => { handleChange(e); handleInput(e); }} 
                                                    />
                                                </Form.Group>
                                                <ErrorMessage name="UserName" />
                                                
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label style={{ color: "black" }}>Password</Form.Label>
                                                    <Form.Control 
                                                        name="Password" 
                                                        value={values.Password} 
                                                        style={{ height: "50px", width: "300px" }} 
                                                        type="password" 
                                                        placeholder="Password" 
                                                        onChange={(e) => { handleChange(e); handleInput(e); }} 
                                                    />
                                                </Form.Group>
                                                <ErrorMessage name="Password" />

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label style={{ color: "black" }}>Confirm Password</Form.Label>
                                                    <Form.Control 
                                                        name="ConfirmPassword" 
                                                        value={values.ConfirmPassword} 
                                                        style={{ height: "50px", width: "300px" }} 
                                                        type="password" 
                                                        placeholder="Confirm Password" 
                                                        onChange={(e) => { handleChange(e); handleInput(e); }} 
                                                    />
                                                </Form.Group>
                                                <ErrorMessage name="ConfirmPassword" />

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label style={{ color: "black" }}>Email</Form.Label>
                                                    <Form.Control 
                                                        name="Email" 
                                                        value={values.Email} 
                                                        style={{ height: "50px", width: "300px" }} 
                                                        type="email" 
                                                        placeholder="Email" 
                                                        onChange={(e) => { handleChange(e); handleInput(e); }} 
                                                    />
                                                </Form.Group>
                                                <ErrorMessage name="Email" />

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label style={{ color: "black" }}>Mobile No</Form.Label>
                                                    <Form.Control 
                                                        name="MobileNo" 
                                                        value={values.MobileNo} 
                                                        style={{ height: "50px", width: "300px" }} 
                                                        type="number" 
                                                        placeholder="Mobile No" 
                                                        onChange={(e) => { handleChange(e); handleInput(e); }} 
                                                    />
                                                </Form.Group>
                                                <ErrorMessage name="MobileNo" />

                                                <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <Button variant="outline-dark" type="submit">
                                                        REGISTER
                                                    </Button>
                                                </div>
                                            </Form>
                                        </Container>
                                    )}
                                </Formik>
                            </Col>
                            <Col xs={12} md={12} xl={2}></Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
