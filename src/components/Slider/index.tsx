import React from 'react';
import { Slide } from 'react-slideshow-image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from '../../assets/images/logo.jpeg';
import { Container, Grid } from '@mui/material';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import { CustomColors } from '../../theme';
import Navbar from '../Navbar';
import { SlideImageProps } from './types';
import useMediaQuery from '@mui/material/useMediaQuery';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { RichTextRenderer } from '../RichText';

const Slider = ({
  slideImages,
  pageHeading,
  pageText,
  pageSubheading,
}: SlideImageProps) => {
  const isSmallScreen = useMediaQuery('(max-width: 1200px)');

  const deviceHeight = window.innerHeight;

  const properties = {
    duration: slideImages.length > 1 ? 5000 : 0,
    transitionDuration: slideImages.length > 1 ? 500 : 0,
    infinite: slideImages.length > 1 ? true : false,
    indicators: false,
    autoplay: true,
    canSwipe: false,
    pauseOnHover: false,
    arrows: slideImages.length > 1 ? true : false,
    prevArrow: (
      <ArrowBackIosIcon
        style={{
          background: CustomColors.primary,
          color: '#fff',
          paddingLeft: 10,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 20,
        }}
      />
    ),
    nextArrow: (
      <ArrowForwardIosIcon
        style={{
          background: CustomColors.primary,
          color: '#fff',
          paddingRight: 5,
          paddingLeft: 5,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 20,
        }}
      />
    ),
  };

  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage?.image?.url})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: slideImage?.image?.position
                  ? slideImage?.image?.position
                  : 'center center',
                backgroundSize: slideImage?.image?.size
                  ? slideImage?.image?.size
                  : 'cover',
                width: '100%',
              }}
              className="container slide-content"
            >
              <div className="slide-overlay"></div>
            </div>
          </div>
        ))}
      </Slide>
      <div
        style={{
          position: 'absolute',
          top: '0%',
          width: '100%',
        }}
      >
        <Navbar />
        <Grid container justifyContent={'flex-end'}>
          <Grid item>
            <div className="logo">
              <img src={Logo} alt="UzebikTIC Logo" style={{ width: '200px' }} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: isSmallScreen ? '10%' : '10%',
          left: isSmallScreen ? '10%' : '5%',
        }}
      >
        <Container maxWidth="xl">
          <div
            style={{
              padding: isSmallScreen ? '10px 10px 10px 0px' : '60px 0 0 0',
            }}
          >
            <h1
              className="animate__animated animate__slideInLeft"
              style={{
                color: pageHeading?.color ? pageHeading?.color : '#fff',
                textAlign: 'left',
                fontSize: isSmallScreen
                  ? '30px'
                  : pageHeading?.fontSize
                  ? pageHeading?.fontSize
                  : '120px',
              }}
            >
              {pageHeading?.text}
            </h1>

            {pageSubheading?.text && (
              <h3
                className="animate__animated animate__slideInLeft"
                style={{
                  color: pageSubheading?.color ? pageSubheading?.color : '#fff',
                  textAlign: 'left',
                  fontSize: isSmallScreen
                    ? '25px'
                    : pageSubheading?.fontSize
                    ? pageSubheading?.fontSize
                    : '30px',
                  marginBottom: 20,
                }}
              >
                {pageSubheading?.text}
              </h3>
            )}

            <Grid container justifyContent={'flex-start'}>
              {pageText?.text && (
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    height: isSmallScreen ? deviceHeight - 300 : 300,
                  }}
                >
                  <PerfectScrollbar>
                    <RichTextRenderer
                      htmlContent={pageText?.text}
                      style={{
                        color: '#fff',
                        textAlign: 'left',
                        fontSize: isSmallScreen ? '20px' : '25px',
                      }}
                      classNames="animate__animated animate__slideInLeft"
                    />
                  </PerfectScrollbar>
                </Grid>
              )}
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Slider;
