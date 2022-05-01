import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default LoadingSpinner;