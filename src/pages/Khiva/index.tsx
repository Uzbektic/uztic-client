import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/khiva/1.jpeg';
import Image2 from '../../assets/images/khiva/2.jpeg';
import Image3 from '../../assets/images/khiva/3.jpeg';
import Image4 from '../../assets/images/khiva/4.jpeg';

const Khiva = () => {
  let leftParagraph = {
    text: `Khiva is a beautiful oasis city with ancient walls, minarets and unique clay buildings. Within the framework of the XI session of the Organization of Islamic Cooperation (OIC) in Baku, Khiva was declared as the tourist capital of the Islamic world in 2024!`,
    color: '#fff',
    fontSize: '20px',
  };

  let centerParagraph = {
    text: `Khiva is over 2500 years old. If you want to plunge into history and see the true beauty of the ancient East, then welcome to Khiva. The ancient Khiva is included in the UNESCO World Heritage List.`,
    color: '#fff',
    fontSize: '20px',
  };

  const slideImages = [
    {
      justifyContent: 'center',
      image: {
        url: Image1,
        size: 'cover',
        position: 'center center',
      },
      title: {
        text: 'Khiva - The capital of the Turkic world',
        fontSize: '60px',
        textAlign: 'center',
      },
      leftParagraph,
      centerParagraph,
    },
    {
      justifyContent: 'center',
      image: {
        url: Image2,
        size: 'cover',
        position: 'center center',
      },
      title: {
        text: 'Khiva - The capital of the Turkic world',
        fontSize: '60px',
        textAlign: 'center',
      },
      leftParagraph,
      centerParagraph,
    },
    {
      justifyContent: 'center',
      image: {
        url: Image3,
        size: 'cover',
        position: 'center center',
      },
      title: {
        text: 'Khiva - The capital of the Turkic world',
        fontSize: '60px',
        textAlign: 'center',
      },
      leftParagraph,
      centerParagraph,
    },
    {
      justifyContent: 'center',
      image: {
        url: Image4,
        size: 'cover',
        position: 'center center',
      },
      title: {
        text: 'Khiva - The capital of the Turkic world',
        fontSize: '60px',
        textAlign: 'center',
      },
      leftParagraph,
      centerParagraph,
    },
  ];

  return <Slider slideImages={slideImages} />;
};

export default Khiva;
