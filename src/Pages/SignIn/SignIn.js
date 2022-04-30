import React from 'react';
import { Link } from 'react-router-dom';
import signInLogo from '../../images/login.png';
import flower from '../../images/flower.png';

const SignIn = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="row d-flex align-items-center">

                    <div className="col-lg-6 col-md-6 col-12 m-2 d-block m-auto text-center">
                        <div className="signup-form-wrapper">
                            <h5 className='welcome-message'>Welcome back again <img src={flower} className="img-fluid mb-2" alt="" /></h5>
                            <h4>Sign In <span className='website-name'> FOOD</span>HOUSE</h4>
                            <div className="signup-form-box">
                                <form>
                                    <input type="email" name='email' placeholder='E-mail' required /><br />
                                    <input type="password" name='password' placeholder='Password' required /> <br />
                                    <p className='text-start px-2 d-flex align-items-center'>Forgot password ? </p>
                                    <button type="submit">Sign In {/* <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /> */} </button>
                                </form>
                                <div>
                                    <p style={{ color: "gray" }} className='text-start py-3 px-2'>Already have an account? <Link className='login-btn' to='/signup'>Sing Up</Link></p>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-10 my-5 order-first order-md-last d-block m-auto">
                        <img src={signInLogo} className="img-fluid d-block m-auto" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;