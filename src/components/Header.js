import React, { Component } from 'react'
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar color="" expand="md">
                    <Row>
                        <Col xs="2">
                            <div id="logo-area">
                                <NavbarBrand href="/" style={{ textDecoration: "none", color: "#FFF" }}>
                                    <i className="fab fa-battle-net text-light logo-grad" style={{ fontSize: "60px", marginLeft: '20px' }}></i>
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
