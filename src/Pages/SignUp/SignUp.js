import React from 'react';
import singupLogo from '../../images/signup.png';


const SignUp = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-6 d-block m-auto">
                        <img src={singupLogo} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="signup-form-wrapper">
                            <div className="signup-form-box">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;