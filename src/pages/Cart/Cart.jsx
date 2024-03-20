import { Col, Container, Row, Image } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";
import heart from "../../img/heart.png";

import "./cart.scss";
const Cart = () => {
  return (
    <>
      <BreadCrumb />
      <Container>
        <Row>
          <Col md={8}>
            <div className="cart-heading  d-flex justify-content-between align-content-center">
              <div className="cart-title text-start  d-flex">
                <h2 className="me-4 fw-bold">Shopping Cart</h2>
                <span>(3 Items)</span>
              </div>
              <Link className="cart-wishlist nav-link">
                <Image src={heart} alt="heart" />
                <p className="mb-0 ms-2">Go to Wishlist</p>
              </Link>
            </div>
          </Col>
          <Col md={4}>2</Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
