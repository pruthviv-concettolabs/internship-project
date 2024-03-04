/* eslint-disable react/prop-types */

import { Card } from "react-bootstrap";
import "./productCard.scss";
const ProductCard = ({
  id,
  imgUrl,
  description,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="cust-card">
      <Card key={id} className="d-flex h-100 border-0">
        <Card.Img src={imgUrl} alt="" />
        <Card.Body className="h-100 m-0">
          <Card.Title>
            <p>
              <a href="#" className="text-decoration-none text-muted">
                {description}
              </a>
            </p>
          </Card.Title>
          <div className="price-list">
            <div className="price">
              <div className="d-flex align-items-start ">
                <span className="currency-type"> ₹</span>
                <span className="currency">{price}</span>
              </div>
              <span className="real-price">{originalPrice}</span>
            </div>
            <div className="discount">
              {discount}
              <span>%</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
