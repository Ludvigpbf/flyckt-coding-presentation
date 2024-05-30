import { SlideProps } from "../../interface/SlideInterface";

const Slide12: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="content-container">
        <div className="card">
          <h2>{props.text1}</h2>
          <ul>
            {props.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2>{props.text2}</h2>
          <ul>
            {props.list2?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Slide12;
