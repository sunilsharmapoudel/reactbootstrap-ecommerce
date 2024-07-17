import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import logo from "../assets/react.svg";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Header() {
    return (
        <header>
            <Navbar variant="dark" bg="dark" expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" /> Broadway
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar" />
                    <Nav className="ms-auto">
                        <NavLink>
                            <FaShoppingCart />
                            Cart
                        </NavLink>
                        <NavLink>
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
