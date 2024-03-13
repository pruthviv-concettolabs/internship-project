import activeStar from "../../img/activeStar.png";
import star from "../../img/star.png";

const Star = () => {
  return (
    <>
      <div className="stars">
        <img src={activeStar} alt="activeStar" />
        <img src={activeStar} alt="activeStar" />
        <img src={activeStar} alt="activeStar" />
        <img src={activeStar} alt="activeStar" />
        <img src={star} alt="star" />
      </div>
    </>
  );
};

export default Star;
