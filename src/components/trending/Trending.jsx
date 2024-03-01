import { Container, Row, Col } from "react-bootstrap";
import rightBtn from "../../img/Group 24.svg";
import electronics from "../../img/download_01329c6f-7968-4d7c-8ee5-438519e49c91_370x.png";
import Kitchen from "../../img/WHTSTRK_BargainFox_VerticalLogo-01_480x480_75827df4-1c04-4ec2-bbad-fe1480f4dbea_1728x.png";
import home from "../../img/household_1728x.png";
import toys from "../../img/balance_toy_for_toy_collection_370x.png";
import sports from "../../img/download_b525e8f5-4280-43cb-909f-de786724dd3a_370x.png";
import job from "../../img/job_lot_370x.png";
import pets from "../../img/download_ae1d8a4c-7fc8-41ec-b8c6-f19e303a98af_370x.png";
import "./trending.scss";
const Trending = () => {
  return (
    <>
      <Container>
        <Row>
          <div className="d-flex justify-content-between  align-content-center mb-4">
            <div className="d-flex">
              <h2 className="fw-bold text-left">Trending on BargainFox</h2>
            </div>

            <div className="d-flex align-items-end ">
              <p className="fw-bold p-0 me-2">View All Deals</p>
              <img
                src={rightBtn}
                className="align-self-center "
                alt="right-btn"
              />
            </div>
          </div>
        </Row>

        <Col className="col-12 p-0">
          <div className="group-box">
            <div className="item-list">
              <img src={electronics} alt="" />
              <span>Up to 10% off</span>

              <h6>Electronics</h6>
            </div>
            <div className="item-list">
              <img src={Kitchen} alt="" />
              <span>Up to 50% off</span>

              <h6>Kitchen</h6>
            </div>
            <div className="item-list">
              <img src={home} alt="" />
              <span>From £50</span>

              <h6>Home</h6>
            </div>
            <div className="item-list">
              <img src={toys} alt="" />
              <span>From £100</span>

              <h6>Toys & Crafts</h6>
            </div>
            <div className="item-list">
              <img src={sports} alt="" />
              <span>Up to 5% off</span>

              <h6>Sports & Leisure</h6>
            </div>
            <div className="item-list">
              <img src={job} alt="" />
              <span>Up to 15% off</span>

              <h6>Job Lots</h6>
            </div>{" "}
            <div className="item-list">
              <img src={pets} alt="" />
              <span>Up to 10% off</span>

              <h6>Pets</h6>
            </div>
          </div>
        </Col>

        <Row></Row>
      </Container>
    </>
  );
};

export default Trending;
