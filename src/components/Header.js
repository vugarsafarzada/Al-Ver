import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import logo from '../../src/images/logo.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar color="" expand="md">
                    <Row>
                        <Col xs="2">
                            <div id="logo-area">
                                <NavbarBrand href="/" style={{ textDecoration: "none", color: "#FFF" }}>
                                    <img src={logo} alt="logo" className="text-light logo-grad"/>

                                </NavbarBrand>
                            </div>
                        </Col>
                        <Col xs="8">
                            <div id="search-area">
                                <input type="search" className="d-inline search-box" placeholder="Axtar..." />
                                <button type="button" title="Axtar" className="search-btn btn text-dark">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </Col>
                        <Col xs="2">
                            <div id="login-area">
                                <a href="/" className="login-link" style={{ marginLeft: "70%" }} title="Giriş">
                                    <i className="fas fa-user-lock login-icon"></i>
                                </a>
                            </div>
                        </Col>

                    </Row>
                </Navbar>
            </div>
        )
    }
}
