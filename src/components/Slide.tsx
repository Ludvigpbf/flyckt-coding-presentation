import { SlideProps } from "../interface/SlideInterface";

const Slide: React.FC<SlideProps> = ({
  slideId,
  /*  title,
  titleId,
  span,
  h2,
  text1,
  text2,
  text3,
  text4,
  image1, */
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
      {/*  {title && (
        <h1 id={titleId ? titleId : ""}>
          {title}
          <span>{span}</span>
        </h1>
      )}
      <h2>{h2}</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>

      {image1 && <img src={image1} alt={title} />} */}
    </div>
  );
};

export default Slide;
