import React, { useState } from 'react';
import singupLogo from '../../images/signup.png';
import './SignUp.css';
import flower from '../../images/flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';





const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstError, setFirstError] = useState('');
    const [secoundError, setSecoudError] = useState('');
    const navigate = useNavigate();



    // react firebase hooks
    const [createUserWithEmailAndPassword, loading1] = useCreateUserWithEmailAndPassword(auth);
    const [user, loadingUser] = useAuthState(auth)
    console.log(user)


    if (user) {
        navigate('/')
    }

    if (loading1 || loadingUser) {
        return <LoadingSpinner></LoadingSpinner>
    }


    // handle userName 
    const hanleUserName = e => {
        setName(e.target.value)
    }

    // hanlde user email 
    const handleUserEmail = e => {
        setEmail(e.target.value)
    }

    // handle user password 
    const handleUserPassword = e => {
        setPassword(e.target.value)
    }

    // handle user password 
    const handleUserConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }


    // handle user sign up from 
    const handleUserSignUp = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setFirstError('Your two password is not match!');
            setSecoudError('');
            return;
        }

        if (confirmPassword.length < 6) {
            setSecoudError('You password should 6  character and longer!!');
            setFirstError('');
            return;
        }

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
            setFirstError('');
            setSecoudError('');
            toast(`${name} SignUp successfully!`)

        }
        e.target.reset();
    }

    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-10 m-2 d-block m-auto">
                        <img src={singupLogo} className="img-fluid mt-5 mb-lg-0 mb-4" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-11 m-2 d-block m-auto text-center">
                        <div className="signup-form-wrapper">
                            <h5 className='welcome-message'>welcome  <img src={flower} className="img-fluid mb-2" alt="" /></h5>
                            <h4>Registration In <span className='website-name'> FOOD</span>HOUSE</h4>
                            <div className="signup-form-box">
                                <form onSubmit={handleUserSignUp}>
                                    <input onBlur={hanleUserName} type="text" name="name" placeholder='Name' required /><br />
                                    <input onBlur={handleUserEmail} type="email" name='email' placeholder='E-mail' required /><br />
                                    <input onBlur={handleUserPassword} type="password" name='password' placeholder='Password' required /> <br />
                                    <input onBlur={handleUserConfirmPassword} type="password" name='confirmPassword' placeholder='Confirm Password' required /><br />
                                    <p className='error-style'>{firstError}</p>
                                    <p className='error-style'>{secoundError}</p>
                                    <button type="submit" className='signUp-btn'>Sign Up <FontAwesomeIcon style={{ marginLeft: '10px' }} icon={faArrowRight} /> </button>
                                </form>
                                <div>
                                    <p style={{ color: "gray" }} className='text-start py-3 px-2'>Already have an account? <Link className='login-btn' to='/signin'>Sing In</Link></p>
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