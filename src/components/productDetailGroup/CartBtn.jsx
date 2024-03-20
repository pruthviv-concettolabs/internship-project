import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CartBtn = () => {
  const navigate = useNavigate();
  return (
    <>
      <Row className="cart-btn-group">
        <Col className="col-lg-6">
          <Button
            id="first-btn"
            onClick={() => {
              navigate("/cart");
            }}>
            Add to Cart
          </Button>
        </Col>
        <Col className="col-lg-6">
          <Button id="second-btn">Buy Now</Button>
        </Col>
      </Row>
    </>
  );
};

export default CartBtn;
