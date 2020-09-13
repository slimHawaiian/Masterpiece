import React, { useState }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = ()=> {
    const [isNavOpen, setNavIsOpen] = useState(false);

    const toggleNav = () => {
        setNavIsOpen(!isNavOpen);
    }

    return (            
        <Navbar light sticky="top" expand="md">
            <div className="container">
                <NavbarBrand className="pr-5" href="/"><h2>Masterpiece</h2></NavbarBrand>
                <NavbarToggler onClick={() => toggleNav()} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/artists">
                                <i className="fa fa-user" /> Artists
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Navigation;