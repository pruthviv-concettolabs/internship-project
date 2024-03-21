import { Button } from "react-bootstrap";

const OrderSummary = () => {
  return (
    <>
      <div className="order-box">
        <h4>Order Summary</h4>
        <div className="order-detail-list">
          <div className="single-line d-flex justify-content-between">
            <p>Item(s) total:</p>
            <p>$68.50</p>
          </div>
          <div className="single-line d-flex justify-content-between">
            <p>Item(s) discount:</p>
            <p id="disc">-$40</p>
          </div>{" "}
          <div className="single-line d-flex justify-content-between">
            <p>Subtotal:</p>
            <p>$28.50</p>
          </div>{" "}
          <div className="single-line d-flex justify-content-between">
            <p>Delivery:</p>
            <p id="free">FREE</p>
          </div>
        </div>
        <div className="suborder-detail-list">
          <div className="single-line total-price d-flex justify-content-between">
            <p>Total (3 Items):</p>
            <p>$28.50</p>
          </div>
          <div className="single-line px-2 d-flex justify-content-between">
            <Button>Proceed to Checkout</Button>
          </div>
          <div className="single-line total-price d-flex justify-content-between">
            <p>
              Order within <span style={{ color: "#0063ff" }}>2h 25m </span> and
              choose
              <span style={{ color: "#0063ff" }}>Express Shipping</span> to get
              it by <span style={{ color: "#0063ff" }}>Tuesday 25/7/2023</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
