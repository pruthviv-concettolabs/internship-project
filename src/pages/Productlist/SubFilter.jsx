import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import FilterBox from "./FilterBox";
import filterImg from "../../img/ProductFilter.svg";
import { Image } from "react-bootstrap";
function SubFilter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        className="bg-transparent border-0 d-flex align-content-center">
        <Image src={filterImg} className="me-2 img-fluid" />
        <span
          style={{
            color: "black",
            fontSize: "20px",
            fontWeight: "600",
          }}>
          Filter
        </span>
      </Button>

      <Offcanvas show={show} onHide={handleClose} classname="w-100">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="fw-bold" style={{ color: "#a4a4b8" }}>
              Filters
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body closeButton>
          <FilterBox />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SubFilter;
