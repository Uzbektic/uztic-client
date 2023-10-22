import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/tashkent/1.jpeg';
import Image2 from '../../assets/images/tashkent/2.jpeg';
import Image3 from '../../assets/images/tashkent/3.jpeg';
import Image4 from '../../assets/images/tashkent/4.jpeg';

const Tashkent = () => {
  let text = `Tashkent is the capital of Uzbekistan and also the largest city in Central Asia. For many years, Tashkent has been the most important business and cultural center of the country, attracting tourists and businessmen from various countries of the world.
  <br /><br />
  Tashkent is one of the oldest cities on the Great Silk Road between China and Europe. The earliest references to Tashkent as a city settlement appeared in written sources in the 2nd century BC. In the Chinese annals the city is called Yueni or Shi; in the records of the Persian king, Shampur, it appears as Chach; and in other Arabic sources, Shash. The name Tashkent first appeared in Turkish documents of the 9th to 12th centuries.
  <br /><br />
  From ancient times, a favourable geographical position and mild climate made Tashkent one of the main Silk Road cities. In the 14–15th centuries it was part of the Timurid Empire, and in the 16th century it was under the control of the Sheibanids dynasty. In 1865, after the conquest of Mikhail Chernyaev, Russian military leader, the city came under the rule of the Russian Empire and a Russian government was established here. In 1930 Tashkent was declared the capital of Uzbekistan, former Uzbek SSR.`;

  const slideImages = [
    {
      image: {
        url: Image1,
        size: 'cover',
        position: 'center center',
      },
    },
    {
      image: {
        url: Image2,
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
      title: {
        text: 'Tashkent – The modern metropolis',
        fontSize: '60px',
        textAlign: 'center',
      },
    },
    {
      image: {
        url: Image4,
        size: 'cover',
        position: 'center center',
      },
    },
  ];

  return (
    <Slider
      slideImages={slideImages}
      pageHeading={{
        text: 'Tashkent',
        fontSize: '60px',
      }}
      pageText={{ text }}
      pageSubheading={{
        text: 'The modern metropolis',
      }}
    />
  );
};

export default Tashkent;
