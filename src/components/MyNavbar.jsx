import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Remote Jobs
        </Link>
        {/* <Navbar.Brand href="#home">Remote Jobs</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
              Home
            </Link>
          </Nav>

          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname === "/favourites" ? "active" : ""}`} to="/favourites">
              Favourites
            </Link>
            {/* <Nav.Link href="#home">Favourites</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
