import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./signUp.scss";
import { Formik } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),

    mobile: yup
      .string()
      .min(10)
      .matches(/^[0-9]+$/, "Mobile number must contain only digits")
      .min(10, "Mobile number must be at least 10 digits")
      .max(10, "Mobile number must not exceed 10 digits")
      .required("Mobile number is required"),
  });
/
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        className="btn dropdown-item text-capitalize rounded-4"
        onClick={handleShow}>
        Login/Register
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0"></Modal.Header>

        <Modal.Body>
          <Formik
            validationSchema={schema}
            initialValues={{ email: "", mobile: "" }}
            onSubmit={(values) => {
              console.log("Form submitted:", values);
              handleClose();
              return values;
            }}>
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Modal.Title className="cust-title">
                  <h4> Sign In / Register</h4>
                  <p>Please enter your phone number or email below</p>
                </Modal.Title>
                <div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter phone number or email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && !!errors.email}
                      placeholder=""
                      autoFocus
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <Button className="form-btn" type="submit">
                  Continue
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUp;
