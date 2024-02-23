import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../Navbar/Navbar.scss";
import logo from "../../img/brand-logo.png";
import searchIcon from "../../img/search-normal.svg";
const NavigationBar = () => {
  return (
    <>
      <header>
        <Navbar className="nav-main" expanded="lg" fixed="top">
          <Container fluid>
            <Row className="w-100 align-items-center d-flex justify-content-center">
              <Col>
                <Navbar.Brand href="/">
                  <img src={logo} className="img-fluid" />
                </Navbar.Brand>
              </Col>

              <Col>
                <Form>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search Products"
                      aria-label="Search Products"
                    />
                    <Button className="btn-search">
                      <img src={searchIcon} alt="search box" />
                    </Button>
                  </InputGroup>
                </Form>
              </Col>
              <Col className="">three</Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavigationBar;
