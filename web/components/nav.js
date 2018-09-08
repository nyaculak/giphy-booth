import {Navbar, Nav, NavItem} from "react-bootstrap";

const MainNav = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Giphy Booth</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="#">
        About
      </NavItem>
    </Nav>
  </Navbar>
)

export default MainNav
