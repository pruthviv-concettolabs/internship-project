import { Form, Col, Row } from "react-bootstrap";

const Price = () => {
  const checkboxLabels = [
    "Under ₹10",
    "₹10 - ₹25",
    "₹25 - ₹50",
    "₹50 - ₹100",
    "over ₹100",
  ];
  return (
    <>
      <Row>
        <Col className="col-12 first-col">
          <h6 className="border-bottom-2">Price </h6>
          <div className="filterOptionbox  ">
            <div className="  form-radio  ">
              <Form>
                {checkboxLabels.map((label) => (
                  <div key={label} className="mb-3">
                    <Form.Check type="checkbox" id={label} label={label} />
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Price;
