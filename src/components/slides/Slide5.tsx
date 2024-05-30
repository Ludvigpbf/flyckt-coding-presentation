import { SlideProps } from "../../interface/SlideInterface";

const Slide5: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
        <h2>Tech Specs</h2>
      </div>
      <div className="tech-section">
        <div className="tech-list">
          <h2>Stack</h2>
          <ul>
            {props.list?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="tech-list">
          <h2>Dependecies</h2>
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
export default Slide5;
