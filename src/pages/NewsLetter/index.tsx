import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import { CustomColors } from '../../theme';
import NewsLetter1Image from '../../assets/images/news-letters/1.png';
import NewsLetter2Image from '../../assets/images/news-letters/2.png';
import NewsLetter3Image from '../../assets/images/news-letters/3.png';
import NewsLetter4Image from '../../assets/images/news-letters/4.png';
import NewsLetter5Image from '../../assets/images/news-letters/5.png';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';
import InteractiveTooltip from '../../components/Tooltip';

const NewsLetter = () => {
  const navigate = useNavigate();
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
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <InteractiveTooltip title="Click to view">
                <img
                  src={NewsLetter3Image}
                  alt="News Letter For September, 2022"
                  style={styles.newsLetterImage}
                  onClick={() => navigate('/view-pdf/0')}
                />
              </InteractiveTooltip>
              <p>September, 2022</p>

              <a
                href={require('../../pdfs/sept-2022.pdf')}
                rel="noreferrer"
                download
              >
                <Button
                  variant="contained"
                  style={{ width: '100%', marginTop: 10 }}
                >
                  Download
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <InteractiveTooltip title="Click to view">
                <img
                  src={NewsLetter2Image}
                  alt="News Letter For January, 2023"
                  style={styles.newsLetterImage}
                  onClick={() => navigate('/view-pdf/1')}
                />
              </InteractiveTooltip>

              <p>January, 2023</p>
              <a
                href={require('../../pdfs/jan-2023.pdf')}
                rel="noreferrer"
                download
              >
                <Button
                  variant="contained"
                  style={{ width: '100%', marginTop: 10 }}
                >
                  Download
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <InteractiveTooltip title="Click to view">
                <img
                  src={NewsLetter4Image}
                  alt="News Letter For April, 2023"
                  style={styles.newsLetterImage}
                  onClick={() => navigate('/view-pdf/2')}
                />
              </InteractiveTooltip>

              <p>April, 2023</p>
              <a
                href={require('../../pdfs/apr-2023.pdf')}
                rel="noreferrer"
                download
              >
                <Button
                  variant="contained"
                  style={{ width: '100%', marginTop: 10 }}
                >
                  Download
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <InteractiveTooltip title="Click to view">
                <img
                  src={NewsLetter1Image}
                  alt="News Letter For August, 2023"
                  style={styles.newsLetterImage}
                  onClick={() => navigate('/view-pdf/3')}
                />
              </InteractiveTooltip>
              <p>August, 2023</p>
              <a
                href={require('../../pdfs/aug-2023.pdf')}
                rel="noreferrer"
                download
              >
                <Button
                  variant="contained"
                  style={{ width: '100%', marginTop: 10 }}
                >
                  Download
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <InteractiveTooltip title="Click to view">
                <img
                  src={NewsLetter5Image}
                  alt="News Letter For November, 2023"
                  style={styles.newsLetterImage}
                  onClick={() => navigate('/view-pdf/4')}
                />
              </InteractiveTooltip>

              <p>November, 2023</p>
              <a
                href={require('../../pdfs/nov-2023.pdf')}
                rel="noreferrer"
                download
              >
                <Button
                  variant="contained"
                  style={{ width: '100%', marginTop: 10 }}
                >
                  Download
                </Button>
              </a>
            </div>
          </Grid>
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
