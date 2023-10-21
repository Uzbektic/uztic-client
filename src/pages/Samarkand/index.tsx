import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/samarkand/1.jpeg';
import Image2 from '../../assets/images/samarkand/2.jpeg';
import Image3 from '../../assets/images/samarkand/3.jpeg';
import Image4 from '../../assets/images/samarkand/4.jpeg';

const Samarkand = () => {
  let leftParagraph = {
    text: `The greatest poets and philosophers of the world have given the city many names – the garden of the soul, the pearl of the east, the mirror of the world and even the face of the earth. However, they were not able to describe the beauty and richness of this beautiful city. Samarkand - the city of kings and scientists
    <br /><br />
    The cultural heritage of Samarkand is quite large, for many centuries the city has been a key centre of the Great Silk Road.`,
    color: '#fff',
    fontSize: '20px',
  };

  let centerParagraph = {
    text: `At the beginning of the XXI century, the city was included in the UNESCO World Heritage List under the name “Samarkand – Crossroads of Cultures”. Having visited the city, you will be surprised with the number of historical monuments located here. We will try to show you the most popular attractions, which are certainly worth seeing!`,
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
        text: 'Samarkand - Crossroads of cultures',
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
        text: 'Samarkand - Crossroads of cultures',
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
        text: 'Samarkand - Crossroads of cultures',
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
        text: 'Samarkand - Crossroads of cultures',
        fontSize: '60px',
        textAlign: 'center',
      },
      leftParagraph,
      centerParagraph,
    },
  ];

  return <Slider slideImages={slideImages} />;
};

export default Samarkand;
