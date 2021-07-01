import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigator extends Component {
    render() {
        return (
            <div className="navigator shadow">
                <Nav className="text-center navs">
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Ana Səhifə">
                            <i className="fas fa-home nav-icon" />
                            <span>Ana Səhifə</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Kataloq">
                        <i className="fas fa-th-large nav-icon"></i>
                        <span>Kataloq</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Favoritlər">
                            <i className="fas fa-heart nav-icon"></i>
                            <span>Favoritlər</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Çatdırılma">
                            <i className="fas fa-shipping-fast nav-icon"></i>
                            <span>Çatdırılma</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Əlaqə">
                            <i className="fas fa-headset nav-icon"></i>
                            <span>Əlaqə</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
