import { Col, Row } from "react-bootstrap";
import dataSet from "./ProductData";
import { Link } from "react-router-dom";
import "./productCard.scss";
const ProductCard = () => {
  return (
    <Row className="m-0 p-0">
      {dataSet &&
        dataSet.map((data) => (
          <Col className=" col-6 col-sm-4 col-lg-3 mb-3" key={data.id}>
            <Link
              to="/productDetail"
              className="text-decoration-none"
              style={{ color: "#292D32" }}>
              <div className="cust-product-card-wrapper">
                <div className="cust-card-body border rounded-4 ">
                  <div>
                    <img src={data.img} className="w-100 img-fluid  " />
                  </div>
                  <div className=" p-3 card-info ">
                    <p
                      className="small"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                      {data.title}
                    </p>
                    <div className=" d-flex justify-content-between price-info align-items-center ">
                      <div className="">
                        <span className=" fw-bold mx-2 fs-6 ">
                          <sup>$</sup>
                          {data.price}
                        </span>
                        <span className=" text-decoration-line-through ">
                          ${data.orignalPrice}
                        </span>
                      </div>
                      <div className="cust-discount-wrapper">
                        <div className="discount">{data.dic}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
    </Row>
  );
};

export default ProductCard;
