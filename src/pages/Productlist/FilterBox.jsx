import { Col, Form, Row } from "react-bootstrap";
import "./filterbox.scss";

const FilterBox = () => {
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
                  {["checkbox"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`OpenBox`}
                        label={`Open Box`}
                      />
                      <Form.Check
                        type={type}
                        id={`BrandNew`}
                        label={`Brand New`}
                      />
                      <Form.Check
                        type={type}
                        id={`likeNew`}
                        label={`Like New`}
                      />

                      <Form.Check
                        type={type}
                        id={`veryGood`}
                        label={`Very Good`}
                      />
                      <Form.Check type={type} id={`good`} label={`Good`} />
                      <Form.Check
                        type={type}
                        id={`acceptable`}
                        label={`Acceptable`}
                      />
                    </div>
                  ))}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FilterBox;
