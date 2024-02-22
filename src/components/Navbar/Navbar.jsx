import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Navbar/Navbar.scss";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="nav-main">
        <Container fluid>
          <Nav>
            <h1>hello</h1>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
