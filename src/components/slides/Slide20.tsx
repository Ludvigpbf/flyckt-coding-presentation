import { SlideProps } from "../../interface/SlideInterface";

const Slide20: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="banner">
        <h2>{props.title}</h2>
        <h1>{props.span}</h1>
        <p>{props.text1}</p>
      </div>
      <div className="image-container">
        <img id="img-10" src={`${imageUrl}${props.image1}`} alt="" />
      </div>
    </div>
  );
};
export default Slide20;
