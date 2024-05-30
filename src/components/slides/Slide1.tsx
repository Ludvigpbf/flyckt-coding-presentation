import { SlideProps } from "../../interface/SlideInterface";

const Slide1: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <h1 className="welcome">{props.title}</h1>
      <h2>
        {props.h2}
        <br></br> <span>{props.span}</span>{" "}
      </h2>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <p>{props.text4}</p>
    </div>
  );
};
export default Slide1;
