import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form, InputGroup } from "react-bootstrap";
import "../Navbar/Navbar.scss";
import logo from "../../img/brand-logo.png";
import searchIcon from "../../img/search-normal.svg";
import heart from "../../img/heart.svg";
import cart from "../../img/shopping-cart.svg";
import user from "../..//img/user.svg";
const NavigationBar = () => {
  return (
    <>
      <header>
        <Navbar className="nav-main" expanded="lg" fixed="top">
          <Container fluid>
            <Row className="w-100 p-2  align-items-center d-flex justify-content-center">
              <Col className="left-column">
                <Navbar.Brand href="/">
                  <img src={logo} className="img-fluid" />
                </Navbar.Brand>
              </Col>

              <Col xs={5} className="center-column">
                <Form>
                  <InputGroup className=" w-100 m-0">
                    <Form.Control
                      placeholder="Search Products"
                      aria-label="Search Products"
                    />
                    <Button className="btn-search">
                      <img src={searchIcon} className="icon" alt="search box" />
                    </Button>
                  </InputGroup>
                </Form>
              </Col>
              <Col className="right-column">
                <Nav className="justify-content-end">
                  <Nav.Item>
                    <Nav.Link href="/#">
                      <img src={heart} />
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="/#">
                      <img src={cart} />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/#">
                      <img src={user} />
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <span>Hello there,</span>
                    <br />
                    <span className="text-uppercase fw-bold">
                      SIGN IN/REGISTER
                    </span>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavigationBar;
