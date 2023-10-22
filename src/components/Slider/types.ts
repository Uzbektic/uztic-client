export interface Text {
  text: string;
  color?: string;
  fontSize?: string;
}

export interface Image {
  url: string;
  position?: string;
  size?: string;
}

export interface SlideImage {
  padding?: string; //remove
  image: Image;
  title?: Text; //remove
  justifyContent?: string; // remove
  leftParagraph?: Text; // remove
  centerParagraph?: Text; // remove
  rightParagraph?: Text; //remove
}

export interface SlideImageProps {
  slideImages: SlideImage[];
  pageText?: Text;
  pageHeading?: Text;
}
