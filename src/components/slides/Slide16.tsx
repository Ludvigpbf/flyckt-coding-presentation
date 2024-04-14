import { SlideProps } from "../../interface/SlideInterface";

const Slide16: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
    </div>
  );
};
export default Slide16;
