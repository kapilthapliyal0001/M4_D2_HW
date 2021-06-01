import {Navbar, Nav} from "react-bootstrap";

const MyNavBar = (props) => (
  // prop is an object
  // this object will hold any prop you're calling your components with
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Browse </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
