import { ReactNode } from "react";

export interface SlideData {
  slideId: string;
  title?: string;
  titleId?: string;
  span?: string;
  spanId?: string;
  h2?: string;
  h2Id?: string;
  text1?: string;
  text1Id?: string;
  text2?: string;
  text2Id?: string;
  text3?: string;
  text3Id?: string;
  text4?: string;
  text4Id?: string;
  text5?: string;
  text5Id?: string;
  text6?: string;
  text6Id?: string;
  text7?: string;
  text7Id?: string;
  text8?: string;
  text8Id?: string;
  text9?: string;
  text9Id?: string;
  text10?: string;
  text10Id?: string;
  list?: string[];
  listId?: string;
  image1?: string;
  image1Id?: string;
  image2?: string;
  image2Id?: string;
  image3?: string;
  image3Id?: string;
  image4?: string;
  image4Id?: string;
  image5?: string;
  image5Id?: string;
  image6?: string;
  image6Id?: string;
  image7?: string;
  image7Id?: string;
  image8?: string;
  image8Id?: string;
  image9?: string;
  image9Id?: string;
  image10?: string;
  image10Id?: string;
  slideClassName?: string;
}

export interface SlideProps extends SlideData {
  slideId: string;
  style?: React.CSSProperties & { "--i"?: number };
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
