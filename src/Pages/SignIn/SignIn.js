import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signInLogo from '../../images/login.png';
import flower from '../../images/flower.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import googleLogo from '../../images/google.png';
import githubLogo from '../../images/GitHub.png';
import './SignIn.css';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useAuthState, useSendPasswordResetEmail, useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useNavigate , useLocation} from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';
import PageTitle from '../../hooks/usePageTitle';



const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // react firebase hooks 
    const [user, loadingUpdate] = useAuthState(auth);
    const [signInWithEmailAndPassword, , loadingSignIn, errorSignIn] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, , loadingGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, , loading] = useSignInWithGithub(auth);


    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve));

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate('/home');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loadingUpdate || loadingSignIn || sending || loadingGoogle || loading) {
        return <LoadingSpinner />
    }


    // handle User Email 
    const hanleUserEmail = e => {
        setEmail(e.target.value)
    }

    // handle User Password 
    const hanleUserPassword = e => {
        setPassword(e.target.value)
    }

    // handle user sign in
    const hanleUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password);
        e.target.reset();

    }

    // handle user password reset 
    const handleResetPassword = () => {
        if (email === "") {
            toast('Please! enter a E-mail address!!');
        }
        else {
            sendPasswordResetEmail(email);
            toast.promise(
                resolveAfter3Sec,
                {
                    success: 'Sent Email',
                }
            )
        }
    }

    // handle google sign in 
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        toast.promise(
            resolveAfter3Sec,
            {
                success: 'Sign In using Google',
            }
        )
    }

    // handle github sign in 
    const handleGithubSignIn = () => {
        signInWithGithub()
        toast.promise(
            resolveAfter3Sec,
            {
                success: 'Sign In using Github',
            }
        )
    }


    return (
        <div>
            {
                PageTitle('Sign In')
            }
            <div className='mt-5 pt-5' style={{marginTop:'20px'}}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6 col-10 my-5 my-lg-0 d-block m-auto" 
                          data-aos="fade-right">
                            <img src={signInLogo} className="img-fluid d-block m-auto p-3" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-11 m-2 d-block m-auto text-center">
                            <div className="signin-form-wrapper" data-aos="fade-left">
                                <h5 className='welcome-message'>Welcome back again <img src={flower} className="img-fluid mb-2" alt="" /></h5>
                                <h4>Sign In <span className='website-name'> FOOD</span>HOUSE</h4>
                                <div className="signup-form-box">
                                    <form onSubmit={hanleUserSignIn}>
                                        <input onBlur={hanleUserEmail} type="email" name='email' placeholder='E-mail' required /><br />
                                        <input onBlur={hanleUserPassword} type="password" name='password' placeholder='Password' required /> <br />
                                        <p style={{ color: "gray" }} className='text-start px-2 d-flex align-items-center'>Forget password ? <button onClick={handleResetPassword} className="btn btn-link text-decoration-none" style={{ color: '#4092c1', cursor: 'pointer' }} > Reset  Password</button></p>
                                        <p className='error-style' >{errorSignIn?.message.slice(22, 36)}</p>
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
                                        <button onClick={handleGoogleSignIn} className='google_btn'><img style={{ marginRight: '10px' }} src={googleLogo} className="img-fluid " alt="" />  Sign In with Google</button>
                                        <button onClick={handleGithubSignIn} className='google_btn mt-3'><img style={{ marginRight: '10px' }} src={githubLogo} className="img-fluid " alt="" />  Sign In with Github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;