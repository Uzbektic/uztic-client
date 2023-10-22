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
  image: Image;
}

export interface SlideImageProps {
  slideImages: SlideImage[];
  pageText?: Text;
  pageHeading?: Text;
  pageSubheading?: Text;
}
