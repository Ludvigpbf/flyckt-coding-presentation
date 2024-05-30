import { SlideProps } from "../../interface/SlideInterface";

const Slide3: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="content-container planning-one">
        <p className="info-text">{props.text1}</p>
        <div className="image-container">
          <img src={`${imageUrl}${props.image1}`} alt="" />
          <p>{props.text2}</p>
        </div>
      </div>
    </div>
  );
};
export default Slide3;
