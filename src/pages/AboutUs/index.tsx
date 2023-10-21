import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/about-us/1.jpg';

const AboutUs = () => {
  const slideImages = [
    {
      image: {
        url: Image1,
        size: 'cover',
        position: '100% 100%',
      },

      title: {
        text: 'About Us',
        fontSize: '70px',
      },
      leftParagraph: {
        text: `Uzbekistan Tourist Information Center is the official Representative office of the Ministry of Tourism Uzbekistan in Pakistan. This office is being established to provide quality services to the travelers who wish to visit Uzbekistan.
        We provide one window operation for all kinds of tourism to Uzbekistan. Including Ziyarat Tourism, Medical Tourism, Study Tourism, Business Tourism & Exhibitions and Youth Tourism. We can organise business meetings/conferences with tours. We can provide state of the art services in Uzbekistan including Visa, Accommodation, Transport domestic and International Air Tickets, Train and Buses Tickets within Uzbekistan, Guide, and Translation Services,
        <br /><br />
        Our office represents the Uzbekistan Ministry of Tourism, Uzbekistan Ministry of Health, Uzbekistan Islamic civilisation centre and Uzbekistan Ministry of Religious affairs.`,
        color: '#fff',
        fontSize: '18px',
      },
      centerParagraph: {
        text: `We are closely working with the Uzbekistan Embassy in Islamabad for the promotions of tourism to Uzbekistan. Businessmen who want to establish businesses or if you are looking for local partners in Uzbekistan this office can be the best place to get all the information. This office can arrange online meetings with Uzbek Businessmen and also can arrange B2B meetings in Uzbekistan.
        <br /><br />
        Tourists who are interested in visiting Ziyarats in Uzbekistan for them our office can organise a complete comprehensive tour covering all Ziyarats in different cities. Starting from Tashkent, Termez, Kitab, Samarkand, Bukhara and Khiva. We can also arrange tours according to your demand and price.
        <br /><br />
        Having more than 20 years of experience working with Uzbekistan our office is highly recommended not only by the Uzbekistan Embassy in Islamabad but also by high officials in Uzbekistan.`,
        color: '#fff',
        fontSize: '18px',
      },
      rightParagraph: {
        text: `We are having offices in different cities of Pakistan listed under 
        <br /><br />
        <strong>Uzbekistan Tourist Information Center Head Office.</strong>
        <br />
        55 Silk Tower, Civic Center Bahria Town Phase 4 Islamabad. <strong>Tel</strong> +92 300 9745458 & +92 300 9745456, <strong>Email</strong>: <a href="mailto:tic.uzbek@gmail.com" style="color: steelblue" target="_blank">tic.uzbek@gmail.com</a>
        <br /><br />
        <strong>Lahore Office </strong>
        36-1-C1, College Road Township Lahore Tel: +92 303 4888844
        <br /><br />
        <strong>Karachi Office.</strong>
        CL 5/6, Ground Floor Shafi Court, Merewether Road, Civil Lines Karachi Tel: +92 21 35215144-54-97
        <br /><br />
        <strong>South Punjab Office</strong>
        Abbasia Banglose opposite Zap School Rahim Yaar Khan Tel: +92 314 6703390
        <br /><br />
        We are working hard to serve you better and looking forward to seeing you in Uzbekistan. For any query or information please call our office in your area. We will be happy to provide you with all kinds of help/Services.`,
        color: '#fff',
        fontSize: '18px',
      },
    },
  ];

  return <Slider slideImages={slideImages} />;
};

export default AboutUs;
