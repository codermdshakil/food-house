import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='mt-5 pt-5'>
            <h1>this is login</h1>
            <Link to="/signup"> Sign Up</Link>
        </div>
    );
};

export default SignIn;