import { Col, Row, Container, Breadcrumb, Form } from "react-bootstrap";
import "./productList.scss";
import ProductCard from "./ProductCard";
import FilterBox from "./FilterBox";

const ProductList = () => {
  return (
    <>
      <section className="product-list">
        <Container>
          <Row className="mb-4">
            <Breadcrumb className="custom-breadcrumb">
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
            <Col className="col-lg-3 d-lg-flex d-none">
              <FilterBox />
            </Col>
            <Col className="col-lg-9 flex-column">
              <Col>
                <div className="productlist-wrapper d-flex align-content-center justify-content-between">
                  <div>
                    <p className="text-dark ">Showing 1 - 20 of 189 results </p>
                  </div>

                  <div>
                    <div className="dropdown-wrapper d-flex justify-content-end align-content-center">
                      <label
                        htmlFor="sortDropdown "
                        className="text-muted font-weight-bold">
                        Sort By:{" "}
                      </label>
                      <div className="dropdown-inner">
                        <Form.Select size="sm">
                          <option>Lowest Price</option>
                          <option>Highest Price</option>
                          <option>Top Customers Reviews</option>
                          <option>Small4 select</option>
                          <option>Most Recent</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Row>
                <ProductCard />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
