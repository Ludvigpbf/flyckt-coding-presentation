import { SlideProps } from "../../interface/SlideInterface";

const Slide10: React.FC<SlideProps> = (props) => {
  const videoUrl =
    import.meta.env.VITE_NODE_ENV === "production"
      ? import.meta.env.VITE_PUBLIC_URL
      : import.meta.env.VITE_DEV_URL;
  return (
    <div className={props.slideClassName}>
      <div className="header">
        <h1>{props.title}</h1>
      </div>
      <div className="video-container">
        <video controls>
          <source src={`${videoUrl}${props.video1}`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Slide10;
