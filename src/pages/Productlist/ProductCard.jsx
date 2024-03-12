import { Col, Row } from "react-bootstrap";
import dataSet from "./ProductData";
const ProductCard = () => {
  return (
    <Row>
      {dataSet &&
        dataSet.map((data) => (
          <Col className=" col-6 col-sm-4 col-lg-3 mb-3" key={data.id}>
            <div>
              <div className=" border rounded-4 ">
                <div>
                  <img src={data.img} className="w-100 img-fluid  " />
                </div>
                <div className=" p-3 ">
                  <p className=" small">{data.title}</p>
                  <div className=" d-flex justify-content-between align-items-center ">
                    <div className="">
                      <span className=" fw-bold mx-2 fs-6 ">
                        <sup>₹</sup>
                        {data.price}
                      </span>
                      <span className=" text-decoration-line-through ">
                        ₹{data.orignalPrice}
                      </span>
                    </div>
                    <div>
                      <span>{data.dic}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default ProductCard;
