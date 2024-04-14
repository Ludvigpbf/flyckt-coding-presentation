import { SlideProps } from "../../interface/SlideInterface";

const Slide5: React.FC<SlideProps> = (props) => {
  const imageUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <h1>{props.title}</h1>
      <h2>{props.h2}</h2>
      <div className="collage">
        <img id="img-1" src={`${imageUrl}${props.image1}`} alt="" />
        <img id="img-2" src={`${imageUrl}${props.image2}`} alt="" />
        <img id="img-3" src={`${imageUrl}${props.image3}`} alt="" />
        <img id="img-4" src={`${imageUrl}${props.image4}`} alt="" />
        <img id="img-5" src={`${imageUrl}${props.image5}`} alt="" />
        <img id="img-6" src={`${imageUrl}${props.image6}`} alt="" />
        <img id="img-7" src={`${imageUrl}${props.image7}`} alt="" />
        <img id="img-8" src={`${imageUrl}${props.image8}`} alt="" />
        <img id="img-9" src={`${imageUrl}${props.image9}`} alt="" />
        <img id="img-10" src={`${imageUrl}${props.image10}`} alt="" />
      </div>
    </div>
  );
};
export default Slide5;
