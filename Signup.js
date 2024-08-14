import React, { useEffect, useState } from "react";
import "./Login.css";
import { SlSocialGoogle } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { ErrorMessage, Field, Formik, Form } from "formik";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase";
import axios from "axios";
import logo from "../Images/logo.png"
import Button from 'react-bootstrap/Button';
import google from "../Images/google.png"


function Login() {

const[details,setDetails]=useState([])
useEffect(()=>{

  axios.get("http://localhost:3001/user/get/api")
  .then((res)=>setDetails(res.data))
  .catch((error)=>{console.log(error)})

},[details])
console.log(details)




  const [mode, setMode] = useState({
    username: "",
    password: "",
  })

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      if (result.user) {
        navigate("/DashBoard");
        const email = result.user.email;
        try {
          sessionStorage.clear();
          sessionStorage.setItem('email', email);
          console.log(email);
          const theres = await axios.post("http://localhost:3001/login/post/api", {
            userName: result.user.email,
            
          });
  
          console.log("Data posted successfully ", theres.data);
         

        } catch (error) {
          console.error("Error while posting data:", error); // Log the error for debugging
          // Handle the error silently or display a friendly message to the user
        }
      }
    });
  }
  


  

  const navigate = useNavigate();

  const signupClick=()=>{

   
    navigate("/SignIn")
  }

  const handleClick = () => {
    sessionStorage.clear();
    sessionStorage.setItem("inputValue", mode.username);
    console.log(mode.username);

    // Check if any user matches the entered username and password
    const user = details.find(user => user.mailId === mode.username && user.password === mode.password);

    if (user) {
      navigate("/DashBoard");
    } else {
    setErrorMessage("Username or  password are incorrect")
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
    }
  }

  const [errorMessage, setErrorMessage] = useState("");




  const schema = yup.object().shape({
    username: yup
      .string().email()
      .required("Username is required"),

    password: yup
      .string()
      .required("Enter the password")
      // .min(8, "Password should be atleast 8 characters")
      // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, "Please tighten your password")
  })

  const handleInput = (e) => {
    setMode({ ...mode, [e.target.name]: e.target.value })
  }

  let handleSubmit = () => {
    let data = {
      username: mode.username,
      password: mode.password,
    }
    // console.log(data)
  }

  return (
    <>
      <Formik
        initialValues={mode}
        validationSchema={schema}
        onSubmit={handleSubmit}

     
      >
        {({ handleChange, handleSubmit }) => (
          <div className={`container1`}>
            {/* <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}> */}
            <div className="forms-container1">
              <div className="signin-signup">

                <Form action="#" className="sign-in-form"
                  onSubmit={handleSubmit}
                >
                  <h2 className="title "  style={{color:"black"}}>Login </h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <Field
                      type="text"
                      placeholder="Email"
                      name="username"
                      value={mode.username}
                      onChange={(e) => { handleChange(e); handleInput(e) }}
                    />
                    <ErrorMessage name="username" >
                      {msg => <div className="error">{msg}</div>}
                    </ErrorMessage>
                  </div>

                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <Field
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={mode.password}
                      onChange={(e) => { handleChange(e); handleInput(e) }}
                    />
                    <ErrorMessage name="password" >
                      {msg => <div className="error">{msg}</div>}
                    </ErrorMessage>

                  </div>

                  <input type="submit" value="Login" onClick={handleClick} className="loginbutton" />
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                  <p className="social-text">Or Sign in with Google</p>
                  <div className="social-media" onClick={googleLogin}>
                    <a href="#" className="social-icon">
                      {/* <SlSocialGoogle /> */}
                      <img src={google} alt="Google Logo" style={{ height: '50px' }} />
                    </a> </div>
                    <h3 style={{color:"black",textAlign:"center"}}>NEW HERE?</h3><p  style={{textAlign:"center"}}>
Sign up now to discover a wealth of new opportunities!</p>
<input type="submit" value="Sign Up" onClick={signupClick} className="loginbutton" />


                   
                </Form>

         
              </div>

            </div>


            <div className="panels-container1">
              <div className="panel left-panel">
                <div className="content">
                <img className="logos" src={logo}></img>
                  <h1>Client Pulse</h1>
                  <p>
                    Welcome to our platform! If you're new here, we're excited to have you join our community. We're here to support you every step of the way.
                  </p>
                  {/* <button className="btn transparent" onClick={toggleSignUpMode}>
              Sign up
            </button> */}
                </div>
              </div>
            </div>


          </div>
        )}
      </Formik>
    </>


  );
}




export default Login;