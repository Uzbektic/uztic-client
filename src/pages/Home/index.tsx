import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/home/1.jpeg';
import Image2 from '../../assets/images/home/2.jpeg';
import Image3 from '../../assets/images/home/3.jpeg';
import Image4 from '../../assets/images/home/4.jpeg';
import Image5 from '../../assets/images/home/5.jpeg';

const Home = () => {
  let text = `to the country of magnificent architecture and ancient traditions preserved a unique heritage. Everyone who comes to this blessed land is welcome here! If you have visited Uzbekistan once, be sure, you will want to return back here again`;

  const slideImages = [
    {
      image: {
        url: Image2,
        size: 'cover',
        position: '50% 80%',
      },
    },
    {
      image: {
        url: Image1,
        size: 'cover',
        position: 'center center',
      },
    },
    {
      image: {
        url: Image3,
        size: 'cover',
        position: 'center center',
      },
    },
    {
      image: {
        url: Image4,
        position: 'center center',
      },
    },
    {
      image: {
        url: Image5,
        position: 'center center',
      },
    },
  ];

  return (
    <Slider
      slideImages={slideImages}
      pageHeading={{
        text: 'Welcome',
      }}
      pageText={{
        text,
      }}
    />
  );
};

export default Home;
