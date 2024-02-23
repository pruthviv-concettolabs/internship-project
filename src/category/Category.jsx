import "./Category.scss";
import { Col, Container, Row } from "react-bootstrap";
import kitchen from "../img/kitchen.png";
import health from "../img/Image12.png";
import electric from "../img/Image14.png";
import toy from "../img/Image15.png";
import sport from "../img/Image17.png";
import Clearance from "../img/Image19.png";

const Category = () => {
  return (
    <>
      <Container className="category-container">
        <Row className="justify-content-md-center py-4">
          <Col>
            <img src={kitchen} alt="" />
            <h6>Home and Kitchen</h6>
          </Col>
          <Col>
            <img src={health} alt="" />
            <h6>Health & Beauty</h6>
          </Col>
          <Col>
            <img src={electric} alt="" />
            <h6>Electronics</h6>
          </Col>
          <Col>
            <img src={toy} alt="" />
            <h6>Toys & Crafts</h6>
          </Col>
          <Col>
            <img src={sport} alt="" />
            <h6>Sports & Leisure</h6>
          </Col>
          <Col>
            <img src={Clearance} alt="" />
            <h6>Clearance</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Category;
