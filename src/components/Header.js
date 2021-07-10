import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import logo from '../../src/images/logo.png'

export default class Header extends Component {

    searchBoxHandler = (e) => {
        var search = e.target.value;
        if (search.length >= 3) {
            document.getElementById('search-box').setAttribute("list", "search-box-list");
        } else {
            document.getElementById('search-box').setAttribute("list", "");
        }
    }

    search = () => {
        var searchValue = document.getElementById('search-box').value;
        if(searchValue.length >= 1){
            window.location.assign(`search?id=${searchValue}`)
        }
    }

    render() {
        return (
            <div className="header">
                <Navbar color="" expand="md">
                    <Row>
                        <Col xs="2">
                            <div id="logo-area">
                                <NavbarBrand href="/" style={{ textDecoration: "none", color: "#FFF" }}>
                                    <img src={logo} alt="logo" className="text-light logo-grad" />
                                </NavbarBrand>
                            </div>
                        </Col>
                        <Col xs="8">
                            <div id="search-area">
                                <input type="search" onChange={this.searchBoxHandler} id="search-box" className="d-inline search-box" placeholder="Axtar..." />
                                <datalist id="search-box-list">
                                    {
                                        this.props.products.map(item => (
                                            <option key={item.id} value={item.productName} />
                                        ))

                                    }
                                </datalist>
                                <button type="search" title="Axtar" onClick={()=> this.search()} className="search-btn btn text-dark">
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
