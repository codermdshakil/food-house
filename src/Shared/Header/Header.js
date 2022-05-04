import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
                <Navbar.Brand as={Link} to="/">
                    <div className='d-flex align-items-center'>
                        <h3 className='title'>FOOD</h3><h3>HOUSE</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={Link} to="home">Banner</Nav.Link>
                        <Nav.Link href="home#inventory-items">Inventory Items</Nav.Link>
                        <Nav.Link href="home#footer">Footer</Nav.Link>
                        {user?.uid ? <Nav.Link  as={Link} to="manageinventoryitems">Manage Inventory</Nav.Link> : ""}
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {user?.uid ? <button onClick={handleSignOut} className='logout-btn'>Sign Out <FontAwesomeIcon icon={faSignOut} /> </button> : <Nav.Link as={Link} to='signin'>Sign In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;