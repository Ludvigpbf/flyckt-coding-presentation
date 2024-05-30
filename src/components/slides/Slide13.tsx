import { SlideProps } from "../../interface/SlideInterface";

const Slide13: React.FC<SlideProps> = (props) => {
 
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
    </div>
  );
};
export default Slide13;
