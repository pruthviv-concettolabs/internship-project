import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import van from "../../img/van.svg";
import returnImg from "../../img/005-warranty.svg";
import warranty from "../../img/Layer 2.svg";
const Conditions = () => {
  return (
    <>
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
    </>
  );
};

export default Conditions;
