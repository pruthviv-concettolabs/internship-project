import "./footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../../img/Facebook Icon.svg";
import twitter from "../../img/Vector.svg";
import ig from "../../img/instagram.svg";
import pinterest from "../../img/pinterest.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
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

          <Row className="pt-4  cust-border">
            <Col className="col-md-4 d-flex align-bottom">
              <div className="social-icon d-flex pe-1">
                <img src={fb} alt="fb" />
              </div>
              <div className="social-icon d-flex ">
                <img src={twitter} alt="fb" />
              </div>
              <div className="social-icon d-flex ">
                <img src={ig} alt="fb" />
              </div>
              <div className="social-icon d-flex ">
                <img src={pinterest} alt="fb" />
              </div>
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
