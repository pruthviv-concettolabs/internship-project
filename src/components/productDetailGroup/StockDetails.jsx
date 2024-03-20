import people from "../../img/group (4).svg";

const StockDetails = () => {
  return (
    <>
      <div className="d-flex align-content-center justify-content-between flex-wrap mb-4">
        <div className="d-flex align-content-center">
          <h6 style={{ fontSize: "14px", margin: 0 }}>
            HURRY, THERE ARE ONLY 6 ITEMs LEFT!
          </h6>
        </div>
        <div className="item-group d-flex align-content-center">
          {/* <div className="d-flex align-content-center"> */}
          <div
            className="sub-item"
            style={{
              background: "#F2F2F8",
              borderRadius: "4px",
              opacity: 1,
              fontSize: "14px",
            }}>
            {" "}
            <img src={people} alt="person" />8
          </div>
          {/* </div> */}
          <h6 style={{ fontSize: "14px", marginBottom: 0 }}>
            HURRY, THERE ARE ONLY 6 ITEM(S) LEFT!
          </h6>
        </div>
      </div>
    </>
  );
};

export default StockDetails;
