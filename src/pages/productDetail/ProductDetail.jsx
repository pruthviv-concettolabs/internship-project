import "./productDetail.scss";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  ProgressBar,
  Row,
} from "react-bootstrap";
import share from "../../img/share.png";
import Ruler from "../../img/Ruler.png";
import van from "../../img/van.svg";
import returnImg from "../../img/005-warranty.svg";
import warranty from "../../img/Layer 2.svg";
import Star from "../../components/star/Star";
import people from "../../img/group (4).svg";
import progressStar from "../../img/Polygon 3.svg";
import bigStar from "../../img/star-big.svg";
import rightImg from "../../img/Group 905349.png";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb.jsx";
import { Link } from "react-router-dom";

import { useState } from "react";

const ProductDetail = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <BreadCrumb />
      <Container fluid className="product-container">
        <Row>
          <Col className="col-lg-6 ">
            <div className="product-slider d-flex  flex-wrap ">
              <div>
                <h1>product image</h1>
              </div>
              {/* <div></div> */}
            </div>
          </Col>
          <Col className="col-lg-6 ">
            <div className="productDetails-wrapper">
              <div className="productTitle">
                <h2>
                  Women&apos; s Blouse Solid Simple Long Sleeve V Neck Button
                  Blouse
                </h2>
                <div className="share">
                  <img src={share} alt="share img" />
                </div>
              </div>
              {/* second line  */}
              <div className="rating d-flex  justify-content-between ">
                <div>
                  <Star />
                  <p>46,546</p>
                </div>
                <div className="sellerName">
                  374 sold, by
                  <strong>Celby Store</strong>
                </div>
              </div>
              {/* third line  */}
              <div className="price-list">
                <div className="price">
                  <div className="d-flex align-items-start ">
                    <span className="currency-type"> $</span>
                    <span className="currency">12</span>
                  </div>
                  <span className="real-price">
                    <del> $38.98</del>
                  </span>
                  <div className="discount  rounded-circle">
                    <span>65% off</span>
                  </div>
                </div>
              </div>
              {/* fourth line */}
              <div className="color-filter">
                <div className="color-title mb-2">
                  color: <strong>Orange</strong>
                </div>
                <div className="color-options">
                  <Button
                    style={{
                      backgroundColor: "#F76F3D",
                    }}></Button>
                  <Button style={{ backgroundColor: "#000000" }}></Button>
                  <Button style={{ backgroundColor: "#327E07" }}></Button>
                  <Button style={{ backgroundColor: "#8185E8" }}></Button>
                  <Button style={{ backgroundColor: "#1B3497" }}></Button>
                </div>
              </div>
              {/* fifth line */}
              <div className="size-group mb-3">
                <div className="size-chart">
                  <span>Size:</span>
                  <Button>XS</Button>
                  <Button>S</Button>
                  <Button>M</Button>
                  <Button>L</Button>
                  <Button>XL</Button>
                  <Button>XXL</Button>
                </div>
                <span className="size-guide">
                  <Image src={Ruler} />
                  Size Guide
                </span>
              </div>
              {/* sixth row  */}

              <div className="quantity-box">
                <Form>
                  <Form.Group
                    className="mb-3 quantity-wrapper"
                    controlId="formBasicEmail">
                    <Form.Label>Quantity:</Form.Label>
                    <Button onClick={removeValue}>-</Button>
                    <Form.Control
                      type="number"
                      placeholder="1"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}></Form.Control>
                    <Button onClick={addValue}>+</Button>
                  </Form.Group>
                </Form>
              </div>
              {/* seventh row */}
              <Row className="condition">
                <Col className="col-lg-4">
                  {" "}
                  <div className="condition-box">
                    <div className="img-wrapper">
                      <Image src={van} />
                    </div>
                    <h6>
                      Free delivery on orders over £50.{" "}
                      <Link className="text-decoration-none">Read More</Link>
                    </h6>
                  </div>
                </Col>
                <Col className="col-lg-3">
                  <div className="condition-box">
                    <div className="img-wrapper">
                      <Image src={warranty} />
                    </div>
                    <h6>
                      Free 45 day returns.
                      <Link className="text-decoration-none">Read More</Link>
                    </h6>
                  </div>
                </Col>
                <Col className="col-lg-5">
                  <div className="condition-box">
                    <div className="img-wrapper">
                      <Image src={returnImg} />
                    </div>
                    <h6>
                      6 month warranty with the Bargain Fox guarantee.
                      <Link className="text-decoration-none">Read More</Link>
                    </h6>
                  </div>
                </Col>
              </Row>
              {/* eight row */}
              <div className="d-flex align-content-center justify-content-between flex-wrap mb-4">
                <div className="d-flex align-content-center">
                  <h6 style={{ fontSize: "14px", margin: 0 }}>
                    HURRY, THERE ARE ONLY 6 ITEMs LEFT!
                  </h6>
                </div>
                <div className="item-group d-flex align-content-center">
                  {/* <div className="d-flex align-content-center"> */}
                  <div
                    className="sub-item"
                    style={{
                      background: "#F2F2F8",
                      borderRadius: "4px",
                      opacity: 1,
                      fontSize: "14px",
                    }}>
                    {" "}
                    <img src={people} alt="person" />8
                  </div>
                  {/* </div> */}
                  <h6 style={{ fontSize: "14px", marginBottom: 0 }}>
                    HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!
                  </h6>
                </div>
              </div>
              {/* nine row  */}
              <Row className="cart-btn-group">
                <Col className="col-lg-6">
                  <Button id="first-btn">Add to Cart</Button>
                </Col>
                <Col className="col-lg-6">
                  <Button id="second-btn">Buy Now</Button>
                </Col>
              </Row>
              {/* tenth row  */}
              <div className="offer-time">
                <p>
                  Order within <Link style={{ color: "#11C252" }}>2h 25m</Link>{" "}
                  and choose{" "}
                  <Link style={{ color: "#11C252" }}>Express Shipping</Link>
                  to get it by Tuesday 25/7/2023
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="second-row">
          <Col md={6}>
            <div style={{ borderTop: "2px solid #f2f2f8" }}>
              <h3 className="text-start">Customer Reviews</h3>
            </div>
            {/* second row  */}
            <div className="cust-rating d-flex justify-content-center align-content-center">
              <div className="rating d-flex flex-column align-content-center flex-wrap text-center">
                <span style={{ fontSize: "91px" }}>4</span>
                <Star />
                <p className="text-muted fw-bold">46,546 Gloabal ratings</p>
              </div>
              <div className="progressbar">
                <div className="progress-line mb-2 d-flex align-content-center">
                  <div className="progress-wrapper me-2 ">
                    <span className="me-1">5</span>
                    <Image src={progressStar} alt="star" />
                  </div>
                  <ProgressBar now={60} />
                  <p className="mb-0 ms-2">0</p>
                </div>
                <div className="progress-line mb-2 d-flex align-content-center">
                  <div className="progress-wrapper me-2 ">
                    <span className="me-1">4</span>
                    <Image src={progressStar} alt="star" />
                  </div>
                  <ProgressBar now={60} />
                  <p className="mb-0 ms-2">0</p>
                </div>
                <div className="progress-line mb-2 d-flex align-content-center">
                  <div className="progress-wrapper me-2 ">
                    <span className="me-1">3</span>
                    <Image src={progressStar} alt="star" />
                  </div>
                  <ProgressBar now={60} />
                  <p className="mb-0 ms-2">0</p>
                </div>
                <div className="progress-line mb-2 d-flex align-content-center">
                  <div className="progress-wrapper me-2 ">
                    <span className="me-1">2</span>
                    <Image src={progressStar} alt="star" />
                  </div>
                  <ProgressBar now={60} />
                  <p className="mb-0 ms-2">0</p>
                </div>
                <div className="progress-line mb-2 d-flex align-content-center">
                  <div className="progress-wrapper me-2 ">
                    <span className="me-1">1</span>
                    <Image src={progressStar} alt="star" />
                  </div>
                  <ProgressBar now={60} />
                  <p className="mb-0 ms-2">0</p>
                </div>
              </div>
            </div>

            {/* third row  */}
            <div className="rate-product">
              <div className="rate-star">
                <Image src={bigStar} alt="star" />
                <Image src={bigStar} alt="star" />
                <Image src={bigStar} alt="star" />
                <Image src={bigStar} alt="star" />
                <Image src={bigStar} alt="star" />
              </div>
              <p>Rate This Product</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="product-details">
              <div style={{ borderTop: "2px solid #f2f2f8" }}>
                <h3 className="text-start mb-3">Highlight</h3>

                <p className="pt-4">
                  <Image src={rightImg} className="me-1" alt="right" /> 80+
                  Customers bought this item
                </p>
              </div>

              <div className="product-description pt-3">
                <h3 className="text-start ">Product Description</h3>
                <div className="mb-3">
                  <p>
                    About this item Spacious and relaxing 6 seater sofa made
                    with high quality fabric;Dimensions: 268L x 182.9D x 78.7H
                    cms Fabric does not lose colour with rubbing; surpassed 30+
                    tests to ensure quality;Durability tested with 100 kg on
                    each seat and backrest for 25,000 cycles
                  </p>
                </div>
                <ListGroup>
                  <ListGroup.Item className="p-0 border-0">
                    <div className="round-title"></div>
                    <b>Band Material</b>: Cotton
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
