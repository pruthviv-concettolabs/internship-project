import { Col, Row, Container, Form } from "react-bootstrap";
import "./productList.scss";
import ProductCard from "./ProductCard";
import FilterBox from "./FilterBox";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import PaginationPart from "./PaginationPart";
import SubFilter from "./SubFilter";

const ProductList = () => {
  return (
    <>
      <BreadCrumb />
      <section className="product-list">
        <Container fluid>
          <Row>
            <Col className="col-lg-3 d-lg-flex d-none">
              <FilterBox />
            </Col>
            <Col className="col-lg-9 flex-column">
              <Col>
                <div className="productlist-wrapper mt-3 mt-lg-0 d-flex align-content-center justify-content-between">
                  <div className="d-none d-lg-block">
                    <p className="text-dark  ">Showing 1 - 20 of 189 results</p>
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

                  <div className="d-block d-lg-none">
                    <SubFilter />
                  </div>
                </div>
              </Col>
              <Row>
                <ProductCard />
              </Row>

              <Col md={12}>
                <PaginationPart />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
