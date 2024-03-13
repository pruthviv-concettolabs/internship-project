import "./productDetail.scss";
import { Col, Container, Row } from "react-bootstrap";
import share from "../../img/share.png";

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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
