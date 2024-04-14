import { SlideProps } from "../../interface/SlideInterface";

const Slide14: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <p>{props.text4}</p>
      <img src={`${imageUrl}${props.image1}`} alt="" />
    </div>
  );
};
export default Slide14;
