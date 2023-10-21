import React from 'react';
import { Slide } from 'react-slideshow-image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Logo from '../../assets/images/logo.jpeg';
import { Container, Grid } from '@mui/material';
import ApplyVisa from '../ApplyVisa';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import { CustomColors } from '../../theme';
import Navbar from '../Navbar';
import { SlideImageProps } from './types';
import useMediaQuery from '@mui/material/useMediaQuery';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { RichTextRenderer } from '../RichText';

const Slider = ({ slideImages }: SlideImageProps) => {
  const isSmallScreen = useMediaQuery('(max-width: 700px)');
  const showSlider = useMediaQuery('(max-width: 1200px)');
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
              <Navbar />
              <div className="slide-overlay"></div>
              <Grid container justifyContent={'space-between'}>
                <Grid item>{/* <ActionSpeedDial /> */}</Grid>
                <Grid item>
                  <div className="logo">
                    <img
                      src={Logo}
                      alt="UzebikTIC Logo"
                      style={{ width: '200px' }}
                    />
                  </div>
                </Grid>
              </Grid>

              <Container maxWidth="xl">
                <div
                  style={{
                    padding: slideImage?.padding
                      ? slideImage?.padding
                      : isSmallScreen
                      ? '70px 30px'
                      : '70px 0',
                  }}
                >
                  <h1
                    className="animate__animated animate__slideInLeft"
                    style={{
                      color: slideImage.title?.color
                        ? slideImage.title?.color
                        : '#fff',
                      textAlign: isSmallScreen
                        ? 'left'
                        : slideImage.title?.textAlign
                        ? slideImage?.title?.textAlign
                        : 'left',
                      fontSize: isSmallScreen
                        ? '50px'
                        : slideImage.title?.fontSize
                        ? slideImage.title?.fontSize
                        : '120px',
                    }}
                  >
                    {slideImage.title?.text}
                  </h1>

                  <PerfectScrollbar>
                    <Grid
                      container
                      justifyContent={
                        slideImage?.justifyContent
                          ? slideImage?.justifyContent
                          : 'flex-start'
                      }
                      spacing={2}
                      sx={{
                        height: showSlider ? deviceHeight - 300 : 'auto',
                      }}
                    >
                      {slideImage?.leftParagraph?.text && (
                        <Grid item xs={12} md={4}>
                          <RichTextRenderer
                            htmlContent={slideImage?.leftParagraph?.text}
                            style={{
                              color: slideImage.leftParagraph?.color
                                ? slideImage.leftParagraph?.color
                                : '#fff',
                              textAlign: slideImage.leftParagraph?.textAlign
                                ? slideImage?.leftParagraph?.textAlign
                                : 'left',
                              fontSize: slideImage.leftParagraph?.fontSize
                                ? slideImage.leftParagraph?.fontSize
                                : isSmallScreen
                                ? '20px'
                                : '25px',
                            }}
                            classNames="animate__animated animate__slideInLeft"
                          />
                        </Grid>
                      )}

                      {slideImage?.centerParagraph?.text && (
                        <Grid item xs={12} md={4}>
                          <RichTextRenderer
                            htmlContent={slideImage?.centerParagraph?.text}
                            style={{
                              color: slideImage.centerParagraph?.color
                                ? slideImage.centerParagraph?.color
                                : '#fff',
                              textAlign: slideImage.centerParagraph?.textAlign
                                ? slideImage?.centerParagraph?.textAlign
                                : 'left',
                              fontSize: slideImage.centerParagraph?.fontSize
                                ? slideImage.centerParagraph?.fontSize
                                : isSmallScreen
                                ? '20px'
                                : '25px',
                            }}
                            classNames="animate__animated animate__slideInLeft"
                          />
                        </Grid>
                      )}

                      {slideImage?.rightParagraph?.text && (
                        <Grid item xs={12} md={4}>
                          <RichTextRenderer
                            htmlContent={slideImage?.rightParagraph?.text}
                            style={{
                              color: slideImage.rightParagraph?.color
                                ? slideImage.rightParagraph?.color
                                : '#fff',
                              textAlign: slideImage.rightParagraph?.textAlign
                                ? slideImage?.rightParagraph?.textAlign
                                : 'left',
                              fontSize: slideImage.rightParagraph?.fontSize
                                ? slideImage.rightParagraph?.fontSize
                                : isSmallScreen
                                ? '20px'
                                : '25px',
                            }}
                            classNames="animate__animated animate__slideInLeft"
                          />
                        </Grid>
                      )}
                    </Grid>
                  </PerfectScrollbar>
                </div>
              </Container>
            </div>
          </div>
        ))}
      </Slide>
      <div className="apply-visa">
        <ApplyVisa />
      </div>
    </div>
  );
};

export default Slider;
