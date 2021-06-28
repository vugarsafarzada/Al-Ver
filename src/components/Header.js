import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Row>
                    <Col xs="4">
                        <h2>AL\VER</h2>
                    </Col>
                    <Col xs="6">
                        <input type="text" className="w-75 h-75"/>
                        <input type="button" value="Axtar" className="h-75"/>
                    </Col>
                    <Col>
                        <a href="/" className="sidebar-link">Giriş </a>
                        |
                        <a href="/" className="sidebar-link">Qeydiyyat</a>
                    </Col>
                </Row>
            </div>
        )
    }
}
