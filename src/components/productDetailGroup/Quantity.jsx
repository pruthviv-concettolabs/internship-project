import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Quantity = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="quantity-box">
        <Form>
          <Form.Group
            className="mb-3 quantity-wrapper"
            controlId="formBasicEmail">
            <Form.Label>Quantity:</Form.Label>
            <Button onClick={removeValue}>-</Button>
            <Form.Control
              type="number"
              placeholder="1"
              value={count}
              onChange={(e) => setCount(e.target.value)}></Form.Control>
            <Button onClick={addValue}>+</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Quantity;
