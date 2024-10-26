import { Container, Grid } from '@mui/material';
import React from 'react';
import { CustomColors } from '../../theme';
import NewsLetter1Image from '../../assets/images/news-letters/1.png';
import NewsLetter2Image from '../../assets/images/news-letters/2.png';
import NewsLetter3Image from '../../assets/images/news-letters/3.png';
import NewsLetter4Image from '../../assets/images/news-letters/4.png';
import NewsLetter5Image from '../../assets/images/news-letters/5.png';
import NewsLetter6Image from '../../assets/images/news-letters/6.png';
import NewsLetter7Image from '../../assets/images/news-letters/7.png';
import NewsLetter8Image from '../../assets/images/news-letters/8.png';
import NewsLetter9Image from '../../assets/images/news-letters/9.png';
import Navbar from '../../components/Navbar';
import NewsLetterItem from '../../components/NewsLetterItem';

const newsletters = [
  {
    image: NewsLetter1Image,
    title: 'News Letter For August, 2023',
    date: 'August, 2023',
    pdfPath: require('../../pdfs/aug-2023.pdf'),
    viewLink: '/view-pdf/3',
  },
  {
    image: NewsLetter2Image,
    title: 'News Letter For January, 2023',
    date: 'January, 2023',
    pdfPath: require('../../pdfs/jan-2023.pdf'),
    viewLink: '/view-pdf/1',
  },
  {
    image: NewsLetter3Image,
    title: 'News Letter For September, 2022',
    date: 'September, 2022',
    pdfPath: require('../../pdfs/sept-2022.pdf'),
    viewLink: '/view-pdf/0',
  },
  {
    image: NewsLetter4Image,
    title: 'News Letter For April, 2023',
    date: 'April, 2023',
    pdfPath: require('../../pdfs/apr-2023.pdf'),
    viewLink: '/view-pdf/2',
  },
  {
    image: NewsLetter5Image,
    title: 'News Letter For November, 2023',
    date: 'November, 2023',
    pdfPath: require('../../pdfs/nov-2023.pdf'),
    viewLink: '/view-pdf/4',
  },
  {
    image: NewsLetter6Image,
    title: 'News Letter For March, 2024',
    date: 'March, 2024',
    pdfPath: require('../../pdfs/mar-2024.pdf'),
    viewLink: '/view-pdf/5',
  },
  {
    image: NewsLetter7Image,
    title: 'News Letter For June, 2024',
    date: 'June, 2024',
    pdfPath: require('../../pdfs/june-2024.pdf'),
    viewLink: '/view-pdf/6',
  },
  {
    image: NewsLetter8Image,
    title: 'Special Edition',
    date: 'Special Edition',
    pdfPath: require('../../pdfs/special.pdf'),
    viewLink: '/view-pdf/7',
  },
  {
    image: NewsLetter9Image,
    title: 'Food Tourism',
    date: 'Food Tourism',
    pdfPath: require('../../pdfs/food.pdf'),
    viewLink: '/view-pdf/8',
  },
];

const NewsLetter = () => {
  return (
    <>
      <Navbar bgPrimary={true} />
      <div style={styles.container}>
        <Container maxWidth="xl">
          <h1
            className="animate__animated animate__bounce"
            style={{ textAlign: 'center' }}
          >
            Our News Letters
          </h1>
        </Container>
      </div>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {newsletters.map((newsletter, index) => (
            <NewsLetterItem key={index} {...newsletter} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default NewsLetter;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: 0,
    padding: '100px',
    backgroundColor: CustomColors.foregroundColor,
  },
  newsLetterImage: {
    width: '100%',
    height: 350,
  },
  newsLetterContainer: {
    padding: 20,
  },
};
