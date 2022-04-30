import React from 'react';
import { Link } from 'react-router-dom';
import signInLogo from '../../images/login.png';
import flower from '../../images/flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './SignIn.css';
import googleLogo from '../../images/google.png';
import githubLogo from '../../images/GitHub.png';



const SignIn = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="row d-flex align-items-center">

                    <div className="col-lg-6 col-md-6 col-12 m-2 d-block m-auto text-center">
                        <div className="signin-form-wrapper">
                            <h5 className='welcome-message'>Welcome back again <img src={flower} className="img-fluid mb-2" alt="" /></h5>
                            <h4>Sign In <span className='website-name'> FOOD</span>HOUSE</h4>
                            <div className="signup-form-box">
                                <form>
                                    <input type="email" name='email' placeholder='E-mail' required /><br />
                                    <input type="password" name='password' placeholder='Password' required /> <br />
                                    <p className='text-start px-2 d-flex align-items-center'>Forgot password ? </p>
                                    <button type="submit" className='signUp-btn' >Sign In <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /> </button>
                                </form>
                                <div>
                                    <p style={{ color: "gray" }} className='text-start mt-2 px-2'>Don't have an Account? <Link className='login-btn' to='/signup'>Sing Up</Link></p>
                                </div>
                                <div className='or-style'>
                                    <div className='first-line'> </div>
                                    <div className='secound-or'> Or </div>
                                    <div className='third-line'> </div>
                                </div>
                                <div>
                                    <button className='google_btn'><img style={{ marginRight: '10px' }} src={googleLogo} className="img-fluid " alt="" />  Sign In with Google</button>
                                    <button className='google_btn mt-3'><img style={{ marginRight: '10px' }} src={githubLogo} className="img-fluid " alt="" />  Sign In with Github</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-10 my-5 order-first order-md-last d-block m-auto">
                        <img src={signInLogo} className="img-fluid d-block m-auto p-2" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;