import React from 'react';
import Slider from '../../components/Slider';
import Image1 from '../../assets/images/contact-us/1.jpeg';
import { CustomColors } from '../../theme';

const ContactUs = () => {
  let text = `<strong>Uzbekistan Tourist Information Center Head Office.</strong>
  <br /> 
  55 Silk Tower, Civic Center Bahria Town Phase 4 Islamabad. <strong>Tel</strong> +92 300 9745458 & +92 300 9745456, <strong>Email</strong>: <a href="mailto:tic.uzbek@gmail.com" style="color: ${CustomColors.offWhite}" target="_blank">tic.uzbek@gmail.com</a>
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
  We are working hard to serve you better and looking forward to seeing you in Uzbekistan. For any query or information please call our office in your area. We will be happy to provide you with all kinds of help/Services.`;

  const slideImages = [
    {
      image: {
        url: Image1,
        size: 'cover',
        position: 'center center',
      },
    },
  ];

  return (
    <Slider
      slideImages={slideImages}
      pageText={{
        text,
      }}
      pageHeading={{
        text: 'Contact Us',
        fontSize: '60px',
      }}
    />
  );
};

export default ContactUs;
