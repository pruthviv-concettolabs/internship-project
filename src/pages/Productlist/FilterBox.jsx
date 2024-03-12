import { Col, Form, Row } from "react-bootstrap";
import "./filterbox.scss";
import Price from "./Price";
import Discount from "./Discount";

const FilterBox = () => {
  const checkboxLabels = [
    "Open Box",
    "Brand New",
    "Like New",
    "Very Good",
    "Good",
    "Acceptable",
  ];
  return (
    <>
      <div className="filter-wrapper">
        <h3 className="">Filter</h3>

        <Row>
          <Col className="col-12 first-col">
            <h6 className="border-bottom-2">Category </h6>
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
            <Price />
            <Discount />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FilterBox;
