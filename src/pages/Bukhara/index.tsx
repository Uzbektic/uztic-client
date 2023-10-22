import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/bukhara/1.jpeg';
import Image2 from '../../assets/images/bukhara/2.jpeg';
import Image3 from '../../assets/images/bukhara/3.jpeg';
import Image4 from '../../assets/images/bukhara/4.jpeg';

const Bukhara = () => {
  let text = `Sacred Bukhara is one of the tourist gems of Uzbekistan. The historic city centre is included in the UNESCO World Heritage List. The age of the city exceeds 2500 years.
  <br /><br />
  Let us say one thing. You will lose lots, if you do not visit Bukhara.The history of the region dates back to the 2nd century BC, and the first mention of Bukhara is the capture of the settlement by the Persian king Cyrus in the 6th century BC. Trade caravans from India and China once passed through this territory. The city of saints`;

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
  ];

  return (
    <Slider
      slideImages={slideImages}
      pageHeading={{
        text: 'Bukhara',
        fontSize: '60px',
      }}
      pageText={{
        text,
      }}
      pageSubheading={{
        text: 'The Capital of Islamic Culture',
      }}
    />
  );
};

export default Bukhara;
