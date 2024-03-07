import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  // Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "../Navbar/Navbar.scss";
import logo from "../../img/brand-logo.png";
import searchIcon from "../../img/search-normal.svg";
import heart from "../../img/heart.svg";
import cart from "../../img/shopping-cart.svg";
import user from "../..//img/user.svg";
const NavigationBar = () => {
  const menus = [
    "Your Profile",
    "Your Orders",
    "Address",
    "Notifications",
    "Wishlist",
  ];
  return (
    <>
      <header>
        <Navbar className="nav-main" expanded="lg">
          <Container fluid>
            <Row className="w-100 p-2  align-items-center d-flex justify-content-center">
              <Col className="left-column">
                <Navbar.Brand href="/">
                  <img src={logo} className="img-fluid" />
                </Navbar.Brand>
              </Col>

              <Col xs={5} className="center-column">
                <Form>
                  <InputGroup className="  m-0">
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
                <ul className="nav justify-content-end align-items-center">
                  <li className="nav-item">
                    <Link to="/#" className="nav-link">
                      <img src={heart} alt="Heart" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/#" className="nav-link">
                      <img src={cart} alt="Cart" />
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <div className="dropdown-wrapper">
                      <div className="d-flex align-items-center">
                        {/* <Link> for menu bar</Link> */}

                        <Link to="/#" className="me-2">
                          <img src={user} alt="user" />
                        </Link>

                        <Link
                          to="/#"
                          className="text-decoration-none dropdown user-details text-end">
                          <p className="m-0">Hello there,</p>
                          <span className="text-uppercase fw-bold">
                            SIGN IN/REGISTER
                          </span>
                        </Link>
                      </div>{" "}
                      <div className="dropdown-body-wrapper  ">
                        <div className="bg-white shadow-lg  dropdown-item dropdown-body absolute w-auto ">
                          <div className="btn dropdown-item mb-3 rounded-4">
                            Login/Register
                          </div>

                          <ul className="list-unstyled text-muted text-start">
                            {menus.map((item, index) => (
                              <li key={index} className="dropdown-item">
                                <Link to="/# "> {item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default NavigationBar;
