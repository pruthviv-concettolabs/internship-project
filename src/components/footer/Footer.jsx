import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../../img/Facebook Icon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row className="pt-5 ">
            <Col md={4}>
              <h4 className="pb-4 ">Help</h4>

              <ul className="list-unstyled">
                <li className="pb-4 ">
                  <a href="#">Delivery</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">Returns</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">Help Centre</a>
                </li>
              </ul>
            </Col>

            {/* second part */}
            <Col md={4}>
              <h4 className="pb-4">About Us</h4>

              <ul className="list-unstyled">
                <li className="pb-4 ">
                  <a href="#">About Us</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">Returns</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">Help Centre</a>
                </li>
              </ul>
            </Col>

            {/* Third part */}
            <Col md={4}>
              <h4 className="pb-4">Your Account</h4>

              <ul className="list-unstyled">
                <li className="pb-4 ">
                  <a href="#">Your Orders</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">Your Orders</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">Download the App</a>
                </li>
                <li className="pb-4 ">
                  <a href="#">FastFox Subscription</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col className="col-md-4 d-flex align-bottom">
              <span className="social-icon d-flex pe-1">
                <img src={fb} alt="fb" />
              </span>
              <span className="social-icon d-flex">
                <img src={fb} alt="fb" />
              </span>
            </Col>
            <Col className="col-md-4 ">
              <p>All rights reserved © 2023 BargainFox.com</p>
            </Col>
            <Col className="col-md-4 ">
              <p>Terms of Service | Privacy Policy</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
