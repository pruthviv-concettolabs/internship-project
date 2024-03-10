import { Col, Container, Row } from "react-bootstrap";
import yellowImg from "../../img/Group 33.png";
import trending from "../../img/Group 905725.png";
import clearance from "../../img/Artboard_6-8.png";
import "./dealGroup.scss";

const DealGroup = () => {
  return (
    <>
      <section className="deal-group">
        <Container>
          <Row className="justify-content-center ">
            <Col className="col-xxl-4 col-12">
              <div className="deal-sub">
                <img src={yellowImg} className="img-fluid" alt="card" />{" "}
                <h4 className="text-center">Deals of the Week</h4>
                <a href="#">View All Products</a>
              </div>
            </Col>
            <Col className="col-xxl-4 col-12">
              <div className="deal-sub">
                <img src={trending} className="img-fluid" alt="trending " />{" "}
                <h4 className="text-center" id="cust-h4">
                  Trending
                </h4>
                <a href="#">View All Products</a>
              </div>
            </Col>

            <Col className="col-xxl-4 col-12">
              <div className="deal-sub">
                <img src={clearance} className="img-fluid" alt="card" />{" "}
                <h4 className="text-center">clearance</h4>
                <a href="#">View All Products</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DealGroup;
