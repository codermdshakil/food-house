import React from 'react';
import singupLogo from '../../images/signup.png';
import './SignUp.css';
import flower from '../../images/flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const SignUp = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-10 m-2 d-block m-auto">
                        <img src={singupLogo} className="img-fluid mt-5 mb-lg-0 mb-4" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 m-2 d-block m-auto text-center">
                        <div className="signup-form-wrapper">
                            <h5 className='welcome-message'>welcome  <img src={flower} className="img-fluid mb-2" alt="" /></h5>
                            <h4>Registration In <span className='website-name'> FOOD</span>HOUSE</h4>
                            <div className="signup-form-box">
                                <form>
                                    <input type="text" name="name" placeholder='Name' required /><br />
                                    <input type="email" name='email' placeholder='E-mail' required /><br />
                                    <input type="password" name='password' placeholder='Password' required /> <br />
                                    <input type="password" name='confirmPassword' placeholder='Confirm Password' required /><br />
                                    <button type="submit">Sign Up <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /> </button>
                                </form>
                                <div>
                                    <p style={{ color: "gray" }} className='text-start py-3 px-2'>Already have an account? <Link className='login-btn' to='/login'>Sing In</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;