import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/about-uzbekistan/1.jpeg';
import Image2 from '../../assets/images/about-uzbekistan/2.jpeg';
import Image3 from '../../assets/images/about-uzbekistan/3.jpeg';
import Image4 from '../../assets/images/about-uzbekistan/4.jpeg';
import Image5 from '../../assets/images/about-uzbekistan/5.jpeg';
import Image6 from '../../assets/images/about-uzbekistan/6.jpeg';

const AboutUzbekistan = () => {
  let text = `Uzbekistan is a mysterious country of the East, where the history of cities gathered in legends, where the sun shines all year round and this reflects the unique nature and beautiful hearts of people. Located in the heart of Central Asia, the Republic of Uzbekistan is famous for its numerous architectural monuments, incredible natural landscapes, magnificent palaces, and ruins of fortresses of past civilizations, outstanding cultural events, gastronomic delights and famous craft workshops. From the first visit, our country evokes extraordinary feelings that prompt us to come here repeatedly. 
  <br /><br />
  The Republic of Uzbekistan includes 12 regions and the autonomous Republic of Karakalpakstan. Each corner of Uzbekistan attracts its features. In Tashkent, you can take a walk in the most beautiful metro in the world or see the most ancient manuscript – the Quran of Usman. In the historical cities included in the UNESCO Cultural Heritage List – Samarkand, Bukhara, Shakhrisabz and Khiva, you can visit the most ancient architectural monuments that have preserved echoes of past eras. In the southernmost part of the country – Surkhandarya, you can travel through mountain gorges or see the ruins of the ancient cities near Termez.
  <br /> <br />
  Depending on the time of year, you can go skiing in the foothills of the Tien Shan or climb the highest point of Big Chimgan.`;

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
    },
    {
      image: {
        url: Image4,
        size: 'cover',
        position: 'center center',
      },
    },
    {
      image: {
        url: Image5,
        size: 'cover',
        position: 'center center',
      },
    },
    {
      image: {
        url: Image6,
        size: 'cover',
        position: 'center center',
      },
    },
  ];

  return (
    <Slider
      slideImages={slideImages}
      pageHeading={{ text: 'About Uzbekistan', fontSize: '60px' }}
      pageText={{
        text,
      }}
    />
  );
};

export default AboutUzbekistan;
