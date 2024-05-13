import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>KRISHI SAHAYAK PORTAL</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" exact to='/home' style={{ color: 'black' }} activeStyle={{ color: 'red' }}>
                                        <span className="fa fa-home fa-lg" style={{ color: 'black' }}></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus' style={{ color: 'black' }} activeStyle={{ color: 'red' }}>
                                        <span className="fa fa-info fa-lg" style={{ color: 'black' }}></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/policies' style={{ color: 'black' }} activeStyle={{ color: 'red' }}>
                                        <span className="fa fa-book fa-lg" style={{ color: 'black' }}></span> Policies&Schemes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/news' style={{ color: 'black' }} activeStyle={{ color: 'red' }}>
                                        <span className="fa fa-search-plus fa-lg" style={{ color: 'black' }}></span> News
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
