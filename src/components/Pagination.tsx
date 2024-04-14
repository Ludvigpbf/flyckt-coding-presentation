import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { PaginationProps } from "../interface/PaginationInterface";

const Pagination: React.FC<PaginationProps> = ({
  leftActive,
  rightActive,
  onPrevious,
  onNext,
  activeSlide,
  firstSlide,
  lastSlide,
}) => {
  return (
    <div className="pagination">
      <button
        className={`${leftActive ? "active" : ""} ${
          firstSlide ? "disabled" : ""
        }`}
        onClick={onPrevious}
      >
        <img src={arrowLeft} alt="" />
      </button>
      <span className="pagination-slide">{(activeSlide ?? 0) + 1}</span>
      <button
        className={`${rightActive ? "active" : ""} ${
          lastSlide ? "disabled" : ""
        }`}
        onClick={onNext}
      >
        <img src={arrowRight} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
