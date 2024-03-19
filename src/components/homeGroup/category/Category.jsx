import "./Category.scss";
import { Container, Row } from "react-bootstrap";
import kitchen from "../../../img/kitchen.png";
import health from "../../../img/Image12.png";
import electric from "../../../img/Image14.png";
import toy from "../../../img/Image15.png";
import sport from "../../../img/Image17.png";
import Clearance from "../../../img/Image19.png";
import Banner from "../../../img/banner.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <section className="main-section">
        <section>
          <Container className="category-container">
            <Row className="justify-content-md-center py-4">
              <div className="category-wrap col-12">
                <div className="category-list dropdown">
                  <img src={kitchen} alt="Home and Kitchen" />
                  <Link className="title">Home and Kitchen</Link>
                </div>
                <div className="category-list">
                  <img src={health} alt="Health & Beauty" />
                  <Link className="title">Health & Beauty</Link>
                </div>
                <div className="category-list">
                  <img src={electric} alt="Electronics" />
                  <Link className="title">Electronics</Link>
                </div>
                <div className="category-list  ">
                  <img src={toy} alt="Toys & Crafts" />
                  <Link className="title">Toys & Crafts</Link>
                </div>
                <div className="category-list d-none d-md-block">
                  <img src={sport} alt="Sports & Leisure" />
                  <Link className="title">Sports & Leisure</Link>
                </div>
                <div className="category-list d-none d-md-block ">
                  <img src={Clearance} alt="Clearance" />
                  <Link className="title">Clearance</Link>
                </div>
              </div>
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
