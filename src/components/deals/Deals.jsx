import { Container, Row, Col } from "react-bootstrap";
import "./deals.scss";
import rightBtn from "../../img/Group 24.svg";
import Slider from "react-slick";
import DealCard from "../../dealCards/DealCard";

const Deals = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="deals">
        <Row>
          <div className="d-flex justify-content-between  align-content-center">
            <div className="d-flex">
              <h1 className="fw-bold text-left">Deals of the Day</h1>

              <div className="d-flex  ps-3 ">
                <h4 className="text-muted align-self-end  fw-bold ">Ends in</h4>
                <div className="">11hrs</div>
              </div>
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

        {/* <Row>
          <Col className="col-12">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <DealCard />
                </div>
                <div>
                  <DealCard />
                </div>{" "}
                <div>
                  <DealCard />
                </div>{" "}
                <div>
                  <DealCard />
                </div>
              </Slider>
            </div>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Deals;
