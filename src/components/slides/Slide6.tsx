import { SlideProps } from "../../interface/SlideInterface";

const Slide6: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <h2>{props.h2}</h2>
      <div className="screens-container">
        <img src={`${imageUrl}${props.image1}`} alt={props.image1Alt} />
      </div>
    </div>
  );
};
export default Slide6;
