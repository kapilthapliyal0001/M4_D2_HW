import {Navbar, Nav} from "react-bootstrap";

const MyNavBar = (props) => (
  // prop is an object
  // this object will hold any prop you're calling your components with
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Strive Berlin Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="">Home</Nav.Link>
        <Nav.Link href="#link">History</Nav.Link>
        <Nav.Link href="#link">Horror </Nav.Link>
        <Nav.Link href="#link">Romance </Nav.Link>
        <Nav.Link href="#link">Scifi</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavBar;
