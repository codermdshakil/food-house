import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    
    
    const [user, loading] = useAuthState(auth);

    const handleSignOut = e => {
        e.preventDefault()
        signOut(auth).then(() => {
            //success
        })
    }

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" className='header-section' variant="light">
            <Container>
                <Navbar.Brand  as={Link} to="/">
                    <div className='d-flex align-items-center'>
                        <h3 className='title'>FOOD</h3><h3>HOUSE</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink to='home'>Banner</CustomLink>
                        <CustomLink to='inventory-items'>Inventory Items</CustomLink>
                        <CustomLink to='blogs'>Blogs</CustomLink>
                        <CustomLink to='footer'>Footer</CustomLink>
                        {user?.uid ? <button onClick={handleSignOut} className='logout-btn'>Sign Out <FontAwesomeIcon icon={faSignOut} /> </button> : <CustomLink to='signin'>Sign In</CustomLink>} 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;