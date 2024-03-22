import { Image, Pagination } from "react-bootstrap";
import leftArrow from "../../img/leftpgarrow.svg";
import rightArrow from "../../img/rightpgarrow.svg";

const PaginationPart = () => {
  return (
    <>
      <div className="pagination-cover d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev className="p-0" id="pagPrev">
            <Image src={leftArrow} alt="leftarrow" />
          </Pagination.Prev>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Next id="pagNext">
            <Image src={rightArrow} alt="rightarrow" />
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
};

export default PaginationPart;
