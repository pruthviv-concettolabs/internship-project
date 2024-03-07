import { Container, Row, Col, Image, InputGroup, Form } from "react-bootstrap";
import arrow from "../../img/Group 905271.svg";
import "./news.scss";

const News = () => {
  return (
    <>
      <section className="news">
        <Container>
          <Row className="align-items-center p-5">
            <Col className="col-lg-7">
              <Row>
                <Col className="col-lg-10">
                  <div className="main-section">
                    <h3>Subscribe to Our Newsletters</h3>
                    <p>
                      Receive exclusive offers, unique gift ideas, and
                      personalised tips for shopping and selling on{" "}
                      <b>BargainFox.</b>
                    </p>
                  </div>
                </Col>

                <Col className="col-lg-2 p-0 align-self-start">
                  <Image src={arrow} className="" />
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="align-items-end">
              <div className="subscribe rounded-4">
                <InputGroup>
                  <Form.Control
                    className=" rounded-start-5 rounded-end-0"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    className="rounded-start-0 rounded-end-5">
                    Subscribe Now
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default News;
