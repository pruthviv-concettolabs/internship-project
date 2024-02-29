import "./Category.scss";
import { Col, Container, Row } from "react-bootstrap";
import kitchen from "../../img/kitchen.png";
import health from "../../img/Image12.png";
import electric from "../../img/Image14.png";
import toy from "../../img/Image15.png";
import sport from "../../img/Image17.png";
import Clearance from "../../img/Image19.png";
import Banner from "../../img/banner.png";

const Category = () => {
  return (
    <>
      <section className="main-section">
        <section>
          <Container className="category-container">
            <Row className="justify-content-md-center py-4">
              <Col>
                <img src={kitchen} alt="Home and Kitchen" />
                <h6>Home and Kitchen</h6>
              </Col>
              <Col>
                <img src={health} alt="Health & Beauty" />
                <h6>Health & Beauty</h6>
              </Col>
              <Col>
                <img src={electric} alt="Electronics" />
                <h6>Electronics</h6>
              </Col>
              <Col>
                <img src={toy} alt="Toys & Crafts" />
                <h6>Toys & Crafts</h6>
              </Col>
              <Col>
                <img src={sport} alt="Sports & Leisure" />
                <h6>Sports & Leisure</h6>
              </Col>
              <Col>
                <img src={Clearance} alt="Clearance" />
                <h6>Clearance</h6>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="banner">
          <Container fluid className="p-0">
            <div>
              <img src={Banner} alt="banner" className="img-fluid w-100" />
            </div>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Category;
