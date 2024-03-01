import { Container, Row, Card } from "react-bootstrap";
import "./deals.scss";
import rightBtn from "../../img/Group 24.svg";
import Slider from "react-slick";
import products from "./products.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Deals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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

        {/* slider  */}

        <Row>
          <div className="slider-container mt-4">
            <Slider {...settings}>
              {products.map((data) => (
                <Card key={data.id} className="d-flex h-100 border-0">
                  <Card.Img src={data.imgUrl} alt="" />
                  <Card.Body className="h-100 m-0">
                    <Card.Text>{data.discount}</Card.Text>

                    <Card.Title className="mt-auto ">{data.title}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
            </Slider>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Deals;
