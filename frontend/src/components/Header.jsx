import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Header() {
    return (
        <header>
            <Navbar variant="dark" bg="dark" expand="md" collapseOnSelect>
                <Container>
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="logo" /> Broadway
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar" />
                    <Nav className="ms-auto">
                        <NavLink to="/cart" className="nav-link">
                            <FaShoppingCart />
                            Cart
                        </NavLink>
                        <NavLink to="/login" className="nav-link">
                            <FaUser />
                            Signin
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
