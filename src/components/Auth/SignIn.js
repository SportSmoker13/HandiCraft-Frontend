import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router';

function SignIn() {

    const[userName,setUserName] = useState()
    const[password,setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.get("http://localhost:5000/api/user/" + userName + "/" + password).then((response)=>{
            if(response.status === 200)  {
                localStorage.setItem('logStatus', true);
                navigate("/home")
            }
        })
        
    }
    // if(res)

  return (
      <div>
          <section className="breadcrumbs">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-left">
                    <h2 className="page-title">SignIp Page</h2>
                </div>
                <div className="col-md-6 text-right">
                    <ul className="breadcrumbs-link">
                        <li><a href="#">Home 
                        <IoIosArrowForward />
                        </a></li>
                        <li><a href="#">Shop 
                        <IoIosArrowForward />
                        </a></li>
                        <li>SignIn</li>
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
                        <form onSubmit={handleSubmit} href="/home">
                            <h4>Login your account</h4>
                            <div className="form-group">
                                <label for="username">Username <span className="required">*</span></label>
                                <input type="text" required className="form-control" id="username" onChange={(e)=>setUserName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="password">Password <span className="required">*</span></label>
                                <input type="password" required className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                            </div>

                            <div className="form-check mt-2 mb-2">
                                <input className="form-check-input" type="checkbox" value="" id="createAnAccount" />
                                <label className="form-check-label" for="createAnAccount">
                                    I agree to <a href="#">terms & Policy</a>.
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>

                        </form>
                        <span className="login-or-with">Or login with</span>
                        <div className="social-button d-flex justify-content-center">
                            <a href="#" className="facebook-btn">
                                <BsFacebook />
                                 Sign in with Facebook</a>
                            <a href="#" className="google-btn">
                                <AiFillGoogleCircle />
                                 Sign in with Google</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
  );
}

export default SignIn;
