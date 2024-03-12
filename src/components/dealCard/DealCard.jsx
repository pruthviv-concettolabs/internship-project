/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./dealCard.scss";
import { Card } from "react-bootstrap";
const DealCard = ({ id, imgUrl, discount, title }) => {
  return (
    <Link to={`/productList`}>
      <Card key={id} className="d-flex p-0 h-100 ">
        <Card.Img src={imgUrl} alt="" />
        <Card.Body className="h-100 m-0">
          <Card.Text>{discount}</Card.Text>
          <Card.Title className="mt-auto">{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DealCard;
