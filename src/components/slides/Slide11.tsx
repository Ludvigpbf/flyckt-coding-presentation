import { SlideProps } from "../../interface/SlideInterface";

const Slide11: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <h2>{props.text1}</h2>
      <p>{props.text2}</p>
      <h2>{props.text3}</h2>
      <p>{props.text4}</p>
    </div>
  );
};
export default Slide11;
