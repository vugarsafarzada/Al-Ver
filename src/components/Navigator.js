import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigator extends Component {
    render() {
        return (
            <div className="navigator">
                <Nav className="text-center navs">
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Ana Səhifə">
                            <i className="fas fa-home nav-icon" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Məhsullar">
                            <i className="fas fa-box-open nav-icon"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Favoritlər">
                            <i className="fas fa-heart nav-icon"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Çatdırılma">
                            <i className="fas fa-shipping-fast nav-icon"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/" className="nav-link" title="Əlaqə">
                            <i className="fas fa-headset nav-icon"></i>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
