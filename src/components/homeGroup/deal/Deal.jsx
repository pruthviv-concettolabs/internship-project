import { Container, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./deal.scss";
import rightBtn from "../../../img/Group 24.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "../dealCard/DealCard.jsx";
import catData from "../dealCard/cateDetails.js";
const Deals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <section className="deals">
        <Container>
          <Row>
            <div className="d-flex justify-content-between mb-2 mb-md-4 align-items-center  p-0">
              <div className="d-flex">
                <h2 className="fw-bold text-left m-0">Deals of the Day</h2>

                <div className="d-flex  ps-3 ">
                  <h4 className="text-muted align-self-end  fw-bold m-0">
                    Ends in
                  </h4>
                </div>
              </div>

              <Nav.Link
                href="#"
                className="d-flex align-items-end text-decoration-none custom-link">
                <span className="fw-bold p-0 ">View All Deals</span>
                <img
                  src={rightBtn}
                  className="align-self-center "
                  alt="right-btn"
                />
              </Nav.Link>
            </div>
          </Row>

          {/* slider  */}

          <Row>
            <div className="slider-container mt-4 p-0">
              <Slider {...settings}>
                {catData.map((data) => (
                  <DealCard
                    key={data.id}
                    id={data.id}
                    imgUrl={data.imgUrl}
                    discount={data.discount}
                    title={data.title}
                  />
                ))}
              </Slider>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Deals;
