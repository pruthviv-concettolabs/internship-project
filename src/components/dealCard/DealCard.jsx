/* eslint-disable react/prop-types */
import "./dealCard.scss";
import { Card } from "react-bootstrap";
const DealCard = ({ id, imgUrl, discount, title }) => {
  return (
    <Card key={id} className="d-flex h-100 border-0">
      <Card.Img src={imgUrl} alt="" />
      <Card.Body className="h-100 m-0">
        <Card.Text>{discount}</Card.Text>
        <Card.Title className="mt-auto">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default DealCard;
