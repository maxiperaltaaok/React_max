import CartIcon from "../CartIcon/CartIcon";
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";


export default function Navbar1(){
    return (
        <header className="headerNav">
        <Navbar variant="dark" expand="lg">
          <Container>
    <Navbar.Brand href="#home">
      <img
        src="./cordillera.png"
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
    <Container className="tituloHeader">
          <Navbar.Brand> <NavLink to="/Nombre de Marca" >Nombre de la Marca</NavLink> </Navbar.Brand>
  </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to= "/Home">Home</NavLink>
              <NavLink to= "/Products">Productos</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
        <FormControl
          type="email"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
      <CartIcon className="cartJs" count={0}> </CartIcon>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </header>
    );
}


