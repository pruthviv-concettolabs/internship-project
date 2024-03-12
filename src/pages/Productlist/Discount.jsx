import { Form, Col, Row } from "react-bootstrap";

const Discount = () => {
  const checkboxLabels = [
    "90% off or more",
    "80% off or more",
    "70% off or more",
    "60% off or more",
    "50% off or more",
    "40% off or more",
  ];
  return (
    <>
      <Row>
        <Col className="col-12 first-col">
          <h6 className="border-bottom-2">Discount </h6>
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

export default Discount;
