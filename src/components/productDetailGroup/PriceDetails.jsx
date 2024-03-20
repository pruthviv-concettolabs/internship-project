const PriceDetails = () => {
  return (
    <>
      <div className="price-list">
        <div className="price">
          <div className="d-flex align-items-start ">
            <span className="currency-type"> $</span>
            <span className="currency">12</span>
          </div>
          <span className="real-price">
            <del> $38.98</del>
          </span>
          <div className="discount  rounded-circle">
            <span>65% off</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
