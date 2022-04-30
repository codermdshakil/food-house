import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className='header-section' variant="light">
            <Container>
                <Navbar.Brand  as={Link} to="/">
                    <div className='d-flex align-items-center'>
                        <h3 className='title'>FOOD</h3><h3>HOUSE</h3>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to='banner'>Banner</CustomLink>
                        <CustomLink to='inventory-items'>Inventory Items</CustomLink>
                        <CustomLink to='blogs'>Blogs</CustomLink>
                        <CustomLink to='add-item'>Add Item</CustomLink>
                        <CustomLink to='login'>Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;