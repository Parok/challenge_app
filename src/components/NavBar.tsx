"use client";

import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Alert } from 'reactstrap';
import LoginModal from './LoginModal';
import { useAuth } from '@/contexts/AuthContext';
import Dashboard from './Dashboard';
import { useNavBar } from '@/contexts/NavBarContext';

const NavBar: React.FC = () => {

    const {isLoggedIn, login, logout} = useAuth();
    const {set } = useNavBar();
    
    return (
        
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Parok UI Challenge</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#" onClick={() => {
                        if(isLoggedIn) {
                            set("dashboard")
                        } else {
                            set("alert-forbidden") 
                        }
                    }}>Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" onClick={() => set("about")}>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" onClick={() => set("contact")}>Contact</NavLink>
                </NavItem>
            </Nav>
            {isLoggedIn ?  (
                <Button color="primary" onClick={logout}>Logout</Button>
             ) : (
                <LoginModal />
            )}
        </Navbar>
    );
}

export default NavBar;
