export interface Text {
  text: string;
  color?: string;
  fontSize?: string;
  textAlign?: any;
}

export interface Image {
  url: string;
  position?: string;
  size?: string;
}

export interface SlideImage {
  padding?: string;
  image: Image;
  title?: Text;
  justifyContent?: string;
  leftParagraph?: Text;
  centerParagraph?: Text;
  rightParagraph?: Text;
}

export interface SlideImageProps {
  slideImages: SlideImage[];
}
