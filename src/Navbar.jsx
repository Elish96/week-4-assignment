import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <nav>
           
                <NavLink to = "/">
                    Home
                    </NavLink>
                    <NavLink to ="/specialties">
                        Specialities
                    </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/service">
                    Service
                </NavLink>
                <NavLink to="/roadmap">
                    Roadmap
                </NavLink>
                <NavLink to ="/team">
                    Team
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
           
        </nav>
        </div>
        
    );
};

export default NavBar;