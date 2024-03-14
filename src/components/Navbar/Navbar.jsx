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
import logo from "../../img/eCart.svg";
import searchIcon from "../../img/search-normal.svg";
import heart from "../../img/heart.svg";
import cart from "../../img/shopping-cart.svg";
import user from "../..//img/user.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import SignUp from "./SignUp";
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
      <header className="nav-main ">
        <Container fluid className="flex-sm-column">
          <Row className="w-100   align-items-center d-flex justify-content-center ">
            <Col className="left-column ">
              <GiHamburgerMenu className="d-md-none me-sm-2 fs-2" />

              <Navbar.Brand href="/">
                <img src={logo} className="img-fluid" />
              </Navbar.Brand>
            </Col>

            <Col className="center-column  d-none d-md-flex    ">
              <Form>
                <InputGroup className=" col-12 m-0">
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
            <Col className="right-column border-0 btn ">
              <ul className="nav justify-content-end align-items-center">
                <li className="nav-item">
                  <Link to="/#" className="nav-link col">
                    <img src={heart} alt="Heart" />
                    <div className="card-amount">0</div>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/#" className="nav-link">
                    <img src={cart} alt="Cart" />
                    <div className="card-amount">0</div>
                  </Link>
                </li>{" "}
                <li className="nav-item  ">
                  <div className="dropdown-wrapper">
                    <div className="d-flex align-items-center">
                      <Link to="/#" className="me-2">
                        <img src={user} alt="user" />
                      </Link>

                      <Link
                        to="/#"
                        className="text-decoration-none d-none d-xl-block dropdown user-details text-end">
                        <p className="m-0">Hello there,</p>
                        <span className="text-uppercase fw-bold">
                          SIGN IN/REGISTER
                        </span>
                      </Link>
                    </div>
                    <div className="dropdown-body-wrapper  ">
                      <div className="bg-white shadow-lg  dropdown-item dropdown-body absolute w-auto ">
                        <div className="dropdown-btn ">
                          <SignUp />
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

          {/* search bottom  */}
          <Row className="w-100 d-md-none d-flex">
            <Col className="center-column col-12 col-sm-12   ">
              <Form className="w-100">
                <InputGroup className=" col-12 w-100 m-0">
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
          </Row>
        </Container>
      </header>
    </>
  );
};

export default NavigationBar;
