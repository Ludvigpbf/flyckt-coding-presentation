import { SlideProps } from "../../interface/SlideInterface";

const Slide11: React.FC<SlideProps> = (props) => {
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="content-container">
        <div className="card">
          <h2>{props.text1}</h2>
          <div className="list-content">
            <ul>
              {props.list?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card">
          <h2>{props.text2}</h2>
          <div className="list-content">
            <ul>
              {props.list2?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card">
          <h2>{props.text3}</h2>
          <div className="list-content">
            <ul>
              {props.list3?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide11;
