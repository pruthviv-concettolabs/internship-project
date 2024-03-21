import "./productDetail.scss";
import {
  Col,
  Container,
  Image,
  ListGroup,
  ProgressBar,
  Row,
} from "react-bootstrap";
import share from "../../img/share.png";
import Star from "../../components/star/Star";
import progressStar from "../../img/Polygon 3.svg";
import bigStar from "../../img/star-big.svg";
import rightImg from "../../img/Group 905349.png";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb.jsx";
import { Link } from "react-router-dom";
import ProductThumbnail from "../../components/productDetailGroup/ProductThumbnail.jsx";
import PriceDetails from "../../components/productDetailGroup/PriceDetails.jsx";
import ColorFilter from "../../components/productDetailGroup/ColorFilter.jsx";
import SizeFilter from "../../components/productDetailGroup/SizeFilter.jsx";
import Quantity from "../../components/productDetailGroup/Quantity.jsx";
import Conditions from "../../components/productDetailGroup/Conditions.jsx";
import StockDetails from "../../components/productDetailGroup/StockDetails.jsx";
import CartBtn from "../../components/productDetailGroup/CartBtn.jsx";

const ProductDetail = () => {
  return (
    <>
      <BreadCrumb />
      <Container fluid className="product-container">
        <Row>
          <Col className="col-lg-6 ">
            <div className="product-slider  ">
              <ProductThumbnail />
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
              <PriceDetails />
              <ColorFilter />
              <SizeFilter />
              <Quantity />
              <Conditions />
              <StockDetails />
              <CartBtn />
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
