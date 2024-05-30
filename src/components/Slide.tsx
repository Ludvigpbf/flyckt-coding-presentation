import { SlideProps } from "../interface/SlideInterface";

const Slide: React.FC<SlideProps> = ({
  slideId,
  children,
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      id={`slide${slideId}`}
      className={`slide ${className}`}
      style={style}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Slide;
