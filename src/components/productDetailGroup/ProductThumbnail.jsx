import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productImages from "./productImages";
import { Row, Col, Image } from "react-bootstrap";
import "./productThumbnail.scss";

const ProductThumbnail = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(nav2);
  }, [nav2]);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsNav = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
  };

  return (
    <>
      <Row>
        <Col md={3} className="col-2">
          <Slider
            {...settingsNav}
            asNavFor={nav1}
            ref={(slider) => setNav2(slider)}
            className="slider-nav">
            {productImages.map((image, index) => (
              <div className="slick-slide cust-img-group" key={image.id}>
                <Image
                  src={image.img}
                  alt={`Thumbnail ${index + 1}`}
                  className="slick-slide-img m-auto  img-fluid"
                />
              </div>
            ))}
          </Slider>
        </Col>
        <Col md={9} className="col-10">
          {/* <div className="slider-for-container"> */}
          <Slider
            {...settingsFor}
            asNavFor={nav2}
            ref={(slider) => setNav1(slider)}
            className="slider-for">
            {productImages.map((image, index) => (
              <div className="slick-slide" key={image.id}>
                <Image
                  src={image.img}
                  alt={`Thumbnail ${index + 1}`}
                  className="slick-slide-thumbimg img-fluid"
                />
              </div>
            ))}
          </Slider>
          {/* </div> */}
        </Col>
      </Row>
    </>
  );
};

export default ProductThumbnail;
