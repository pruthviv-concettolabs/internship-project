import { Container, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import rightBtn from "../../img/Group 24.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./electronics.scss";

import product from "../electronics/product.js";
import ProductCard from "../productCard/ProductCard";
const Electronics = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 992,
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
      <section className="garden">
        <Container>
          <Row>
            <div className="d-flex justify-content-between mb-2 mb-md-4 align-items-center  p-0">
              <div className="d-flex main-heading">
                <h2 className="fw-bold text-left m-0">Electronics</h2>
                <span>best deals</span>
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

          <Row>
            <div className="slider-container mt-4 p-0">
              <Slider {...settings}>
                {product.map((data) => (
                  <ProductCard
                    key={data.id}
                    id={data.id}
                    imgUrl={data.imgUrl}
                    description={data.description}
                    price={data.price}
                    originalPrice={data.originalPrice}
                    discount={data.discount}
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

export default Electronics;
