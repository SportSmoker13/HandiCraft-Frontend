import axios from "axios";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useNavigate } from "react-router";

function SignUp() {
  const [firtsName, setFirtsName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const  navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      axios.post("http://localhost:5000/api/user", {
        firstName: firtsName,
        lastName: lastName,
        email: email,
        username: userName,
        password: password,
      }).then((response)=>{
        if(response.status === 200)  {
          localStorage.setItem('logStatus', true);
          navigate("/home")
      }
      })
      
    } else {
        console.log("Password Do Not Match!!!")
    }
  };

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <h2 className="page-title">SignUp Page</h2>
            </div>
            <div className="col-md-6 text-right">
              <ul className="breadcrumbs-link">
                <li>
                  <a href="#">
                    Home <IoIosArrowForward />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Shop <IoIosArrowForward />
                  </a>
                </li>
                <li>SignUp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="signup-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="signup-wrapper">
                <form onSubmit={handleSubmit}>
                  <h4>Signup your account</h4>
                  <div className="form-group">
                    <label for="firstName">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={(e) => setFirtsName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="lastName">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="username">
                      Usermame <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">
                      Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="confirmPassword">
                      Confirm Password <span className="required">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-check mt-2 mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="createAnAccount"
                    />
                    <label className="form-check-label" for="createAnAccount">
                      I agree to <a href="#">terms & Policy</a>.
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Create an account
                  </button>
                </form>
                <span className="login-or-with">Or Signup with</span>
                <div className="social-button d-flex justify-content-center">
                  <a href="#" className="facebook-btn">
                  <BsFacebook /> Sign up with Facebook
                  </a>
                  <a href="#" className="google-btn">
                  <AiFillGoogleCircle /> Sign up with Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
