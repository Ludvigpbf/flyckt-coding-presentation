import { SlideProps } from "../../interface/SlideInterface";

const Slide6: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <p>{props.text4}</p>
      <p>{props.text5}</p>
      <p>{props.text6}</p>
      <p>{props.text7}</p>
    </div>
  );
};
export default Slide6;
