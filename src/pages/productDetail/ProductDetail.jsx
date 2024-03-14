import "./productDetail.scss";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import share from "../../img/share.png";
import Ruler from "../../img/Ruler.png";
import Star from "../../components/star/Star";

const ProductDetail = () => {
  return (
    <>
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
                  <Button style={{ backgroundColor: "#F76F3D" }}></Button>
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

              <div className="quantity-box">kl</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
