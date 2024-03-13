import { Breadcrumb, Row } from "react-bootstrap";
import "./breadCrumb.scss";

const BreadCrumb = () => {
  return (
    <>
      <Row className="mb-4">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item href="#" className="text-muted text-decoration-none">
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
    </>
  );
};

export default BreadCrumb;
