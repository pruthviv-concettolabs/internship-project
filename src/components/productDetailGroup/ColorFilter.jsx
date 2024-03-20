import { Button } from "react-bootstrap";

const ColorFilter = () => {
  return (
    <>
      <div className="color-filter">
        <div className="color-title mb-2">
          color: <strong>Orange</strong>
        </div>
        <div className="color-options">
          <Button
            style={{
              backgroundColor: "#F76F3D",
            }}></Button>
          <Button style={{ backgroundColor: "#000000" }}></Button>
          <Button style={{ backgroundColor: "#327E07" }}></Button>
          <Button style={{ backgroundColor: "#8185E8" }}></Button>
          <Button style={{ backgroundColor: "#1B3497" }}></Button>
        </div>
      </div>
    </>
  );
};

export default ColorFilter;
