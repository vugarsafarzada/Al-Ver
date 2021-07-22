//Tools
import { Nav, NavItem } from 'reactstrap';
function Navigator() {
    return (
        <div className="navigator shadow">
            <Nav className="text-center navs">
                    <NavItem>
                        <a href="/main" className="nav-link" title="Ana Səhifə">
                            <i className="fas fa-home nav-icon" />
                            <span>Ana Səhifə</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href="/categories" className="nav-link" title="Kataloq">
                            <i className="fas fa-th-large nav-icon"></i>
                            <span>Kataloq</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href="/favorites" className="nav-link" title="Favoritlər">
                            <i className="fas fa-heart nav-icon"></i>
                            <span>Favoritlər</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href="/delivery" className="nav-link" title="Çatdırılma">
                            <i className="fas fa-shipping-fast nav-icon"></i>
                            <span>Çatdırılma</span>
                        </a>
                    </NavItem>
                    <NavItem>
                        <a href="/contact" className="nav-link" title="Əlaqə">
                            <i className="fas fa-headset nav-icon"></i>
                            <span>Əlaqə</span>
                        </a>
                    </NavItem>
            </Nav>
        </div>
    )
}

export default Navigator;