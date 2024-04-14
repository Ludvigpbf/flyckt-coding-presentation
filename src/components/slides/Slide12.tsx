import { SlideProps } from "../../interface/SlideInterface";

const Slide12: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <ul>
        {props.list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Slide12;
