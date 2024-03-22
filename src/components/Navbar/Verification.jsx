import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Verification = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        className="btn  dropdown-item  text-capitalize  rounded-4"
        onClick={handleShow}>
        Login/Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0 "></Modal.Header>

        <Modal.Body>
          <Form>
            <Modal.Title className="cust-title">
              <h4> Sign In / Register</h4>
              <p>Please enter your phone number or email below</p>
            </Modal.Title>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter phone number or email</Form.Label>
              <Form.Control type="email" placeholder="" autoFocus />
            </Form.Group>
          </Form>
          <Button className="form-btn" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Verification;
