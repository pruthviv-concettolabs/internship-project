import { Button, Image } from "react-bootstrap";
import Ruler from "../../img/Ruler.png";

const SizeFilter = () => {
  return (
    <>
      <div className="size-group mb-3">
        <div className="size-chart">
          <span>Size:</span>
          <Button>XS</Button>
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button>
          <Button>XL</Button>
          <Button>XXL</Button>
        </div>
        <span className="size-guide">
          <Image src={Ruler} />
          Size Guide
        </span>
      </div>
    </>
  );
};

export default SizeFilter;
