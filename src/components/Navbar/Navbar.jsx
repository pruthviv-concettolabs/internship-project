import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
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
          <Row>
            <Col className="">
              <Navbar.Brand href="/">
                <img src={logo} />
              </Navbar.Brand>
            </Col>
            <Col className="">
              <Form inline>
                <InputGroup>
                  <InputGroup.Text className="">All</InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form>
              {/* <Form inline></Form> */}
            </Col>
            <Col className="">thre</Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
