import { Col, Row, Container, Breadcrumb } from "react-bootstrap";

const ProductList = () => {
  return (
    <>
      <section className="product-list">
        <Container>
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item
                href="#"
                className="text-muted text-decoration-none">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href="/#"
                className="text-muted text-decoration-none">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row>
            <Col className="col-lg-4">1</Col>
            <Col className="col-lg-8">2</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
