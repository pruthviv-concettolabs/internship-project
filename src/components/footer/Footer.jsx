import "./footer.scss";
import { Container, Col, Row } from "react-bootstrap";
import fb from "../../img/Facebook Icon.svg";
import twitter from "../../img/Vector.svg";
import ig from "../../img/instagram.svg";
import pinterest from "../../img/pinterest.svg";
import { Link } from "react-router-dom";
Link;

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="wrapper d-flex justify-content-between">
            <div className="footer-list">
              <h4 className="pb-4 ">Help</h4>

              <ul className="list-unstyled">
                <li className="pb-4 ">
                  <Link to="/#">Delivery</Link>
                </li>
                <li className="pb-4 ">
                  <Link href="#">Returns</Link>
                </li>
                <li className="pb-4 ">
                  <Link href="#">Help Centre</Link>
                </li>
              </ul>
            </div>

            {/* second part */}
            <div className="footer-list">
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
            </div>

            {/* Third part */}
            <div className="footer-list">
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
            </div>
          </div>

          <Row className="pt-4  cust-border d-flex justify-content-between">
            <Col className="col-xl-4 first-col d-flex col-12  ">
              {/* <div className="social-icon d-flex pe-1">
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
              </div> */}
              <div className=" d-flex icon-list ">
                <ul className="list-unstyled">
                  <li>
                    <a>
                      <img src={fb} alt="fb" />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={twitter} alt="fb" />
                    </a>
                  </li>{" "}
                  <li>
                    <a>
                      <img src={ig} alt="fb" />
                    </a>
                  </li>{" "}
                  <li>
                    <a>
                      <img src={pinterest} alt="pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-xl-4 col-12">
              <p className="text-center">
                All rights reserved © 2023{" "}
                <a href="#" className="cursor-pointer">
                  BargainFox.com
                </a>
              </p>
            </Col>
            <Col className="col-xl-4 col-12 text-end third-ft-part">
              <ul className="list-unstyled d-flex justify-content-end ">
                <li id="first-li">
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
