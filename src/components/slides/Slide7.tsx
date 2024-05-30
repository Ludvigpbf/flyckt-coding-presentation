import { SlideProps } from "../../interface/SlideInterface";

const Slide7: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="header -design">
        <h1>{props.title}</h1>
      </div>
      <div className="screens-container">
        <div className="screen">
          <h3>Webb App</h3>
          <img src={`${imageUrl}${props.image1}`} alt={props.image1Alt} />
        </div>
        <div className="screen">
          <h3>React Native App</h3>
          <img src={`${imageUrl}${props.image2}`} alt={props.image2Alt} />
        </div>
      </div>
    </div>
  );
};
export default Slide7;
