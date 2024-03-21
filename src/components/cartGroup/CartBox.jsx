import Quantity from "../productDetailGroup/Quantity";
import { Col, Form, Image, Row } from "react-bootstrap";
import firstCartImg from "../../img/firstcartimg.png";

const CartBox = () => {
  return (
    <>
      <Row className="cart-box ">
        <Col
          xl={1}
          className="list-check d-flex justify-content-center align-content-center col-1">
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  className="check"
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </Col>
        <Col xl={2} className="cart-img col-3 ">
          <Image src={firstCartImg} className="img-fluid" alt="cartImg" />
        </Col>

        <Col xl={6} className="product-details d-flex flex-column col-8">
          <div>
            <p>
              Women&apos;s Blouse Solid Simple Long Sleeve V Neck Button Blouse
            </p>
          </div>

          {/* second line  */}
          <div className="price d-flex">
            <div className="currency">
              <sup>$</sup>
              <span>12</span>
            </div>
            <div className="real-price">$38.98</div>
            <div className="discount-price">-65%</div>
          </div>
          {/* thrid line  */}
          <div className="cart-edit d-flex align-content-center">
            <div>
              <Quantity />
            </div>
            <div className="btn-group ">
              <div className="btn-title">
                <p>Delete</p>
              </div>
            </div>
          </div>
        </Col>
        {/* main third */}
        <Col xl={3} className="cart-product-details col-12">
          <p>
            <span>Condition: </span>Brand New
          </p>
          <p>
            <span>374 sold, by</span>
            Celby Store,
            <span className="right-p">2 left</span>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default CartBox;
