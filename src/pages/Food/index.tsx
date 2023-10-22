import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/food/1.jpeg';
import Image2 from '../../assets/images/food/2.jpeg';
import Image3 from '../../assets/images/food/3.jpeg';
import Image4 from '../../assets/images/food/4.jpeg';

const Food = () => {
  let text = `Gastronomy is one more reason to fall in love with Uzbekistan. Having arrived in our country, you can refuse any excursion, but you will never refuse food, especially here, where even at the airport the air is saturated with the smell of delicious dishes.The gastronomic trip to Uzbekistan will give you an unforgettable taste experience for the whole year and you will certainly want to repeat it even at home. Gastronomy is one more reason to fall in love with Uzbekistan.
  <br /><br />
  Having arrived in our country, you can refuse any excursion, but you will never refuse food, especially here, where even at the airport the air is saturated with the smell of delicious Uzbek bread - non, patyr, shirmoi-non, katlama. Dishes from the dough - soms, manty, khanum, chuchvara, naryn, kovurma lagman. Rice dishes - pilaf, shawl, moshkichiri, moshhurda, mastava, hasip. Desserts and sweets - fresh and dried fruits, sumalak, halva, halvaitar, nisholda, chak-chak, boogirsak, kushtili, urama (people call it “khvorost” and it translated as brushwood), baklava, pashmak behi-dulma. Drinks - tea, koumiss, sharbat, ayran, katyk.`;

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
        text: 'Food',
        fontSize: '70px',
        textAlign: 'left',
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
      pageHeading={{ text: 'Food', fontSize: '60px' }}
      pageText={{ text }}
    />
  );
};

export default Food;
