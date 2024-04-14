import { SlideProps } from "../../interface/SlideInterface";

const Slide1: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <p className="welcome">{props.title}</p>
      <h1>{props.h2}</h1>
      <p>{props.text1}</p>
    </div>
  );
};
export default Slide1;
