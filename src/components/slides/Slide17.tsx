import { SlideProps } from "../../interface/SlideInterface";

const Slide17: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
      </div>
      <div className="image-container">
        <img src={`${imageUrl}${props.image1}`} alt="" />
        <img src={`${imageUrl}${props.image2}`} alt="" />
        <img src={`${imageUrl}${props.image3}`} alt="" />
        <img src={`${imageUrl}${props.image4}`} alt="" />
      </div>
    </div>
  );
};
export default Slide17;
