import { SlideProps } from "../../interface/SlideInterface";

const Slide7: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <h2>{props.text1}</h2>
      <h2>{props.text2}</h2>
    </div>
  );
};
export default Slide7;
