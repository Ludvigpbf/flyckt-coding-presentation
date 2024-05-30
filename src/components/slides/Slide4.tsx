import { SlideProps } from "../../interface/SlideInterface";

const Slide4: React.FC<SlideProps> = (props) => {

  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="content-container planning-two">
        <div className="card">
          <h2>Tid</h2>
          <div className="card-content">
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
          </div>
        </div>
        <div className="card">
          <h2>Utförande</h2>
          <div className="card-content">
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p>{props.text6}</p>
            <p>{props.text7}</p>
          </div>
        </div>
        <div className="card">
          <h2>Prioriteringar</h2>
          <div className="card-content">
            <p>{props.text8}</p>
            <p>{props.text9}</p>
            <p>{props.text10}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slide4;
