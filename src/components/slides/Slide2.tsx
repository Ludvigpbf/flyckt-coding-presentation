import { SlideProps } from "../../interface/SlideInterface";

const Slide2: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <div className="company-info">
        <h1>{props.title}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
      </div>
      <div className="list-container">
      <ul>
        {props.list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul></div>
    </div>
  );
};
export default Slide2;
