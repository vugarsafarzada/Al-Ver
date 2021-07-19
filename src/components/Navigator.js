import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Navigator(){
    return (
        <div className="navigator shadow">
            <Nav className="text-center navs">
                <NavItem>
                    <Link to="/main" className="nav-link" title="Ana Səhifə">
                        <i className="fas fa-home nav-icon" />
                        <span>Ana Səhifə</span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/categories" className="nav-link" title="Kataloq">
                    <i className="fas fa-th-large nav-icon"></i>
                    <span>Kataloq</span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/favorites" className="nav-link" title="Favoritlər">
                        <i className="fas fa-heart nav-icon"></i>
                        <span>Favoritlər</span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/delivery" className="nav-link" title="Çatdırılma">
                        <i className="fas fa-shipping-fast nav-icon"></i>
                        <span>Çatdırılma</span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact" className="nav-link" title="Əlaqə">
                        <i className="fas fa-headset nav-icon"></i>
                        <span>Əlaqə</span>
                    </Link>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navigator;