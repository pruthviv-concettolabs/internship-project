import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, InputGroup } from "react-bootstrap";
import "../Navbar/Navbar.scss";
import logo from "../../img/brand-logo.png";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="nav-main" expanded="lg" fixed="top">
        <Container fluid>
          <Row className="w-100 align-items-center">
            <Col>
              <Navbar.Brand href="/">
                <img src={logo} className="img-fluid" />
              </Navbar.Brand>
            </Col>
            <Col>
              <Form>
                <InputGroup>
                  <Form.Select aria-label="Default select example">
                    <option>All</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>

                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col className="">three</Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
