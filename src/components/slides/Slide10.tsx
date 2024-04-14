import { SlideProps } from "../../interface/SlideInterface";

const Slide10: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="info-container">
        <h1>{props.title}</h1>
        <h2>{props.text1}</h2>
      </div>
      <div className="image-container">
        <img id="cityguide" src={`${imageUrl}${props.image1}`} alt="" />
      </div>
    </div>
  );
};
export default Slide10;
