import { Breadcrumb } from "react-bootstrap";
import "./breadCrumb.scss";

const BreadCrumb = () => {
  return (
    <>
      <div className="breadcrumb-wrapper">
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
      </div>
    </>
  );
};

export default BreadCrumb;
