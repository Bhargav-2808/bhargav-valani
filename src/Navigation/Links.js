import { Link } from "react-router-dom";
import { Navbar, Nav, Container} from "react-bootstrap";
import "./Links.css";

export default function Links() {
  return (
    <>
      <header>
      <Navbar collapseOnSelect expand="sm" className="bgc">
        <Container>
          <Navbar.Brand  className="logo">Bhargav Valani</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="ml-sm-auto ">
              <Nav.Link className="active" as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link  as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link  as={Link} to={"/Skill"}>
                Skill
              </Nav.Link>
              <Nav.Link  as={Link} to={"/projects"}>
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    </>
  );
}
