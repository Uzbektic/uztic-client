import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { CustomColors } from '../../theme';
import Navbar from '../../components/Navbar';
import NewsLetterItem from '../../components/NewsLetterItem';
import { newsletters } from './constants';

const NewsLetter = () => {
  const [sortOrder, setSortOrder] = useState<'new' | 'old'>('new');
  const sortedNewsletters = [...newsletters].sort((a, b) =>
    sortOrder === 'new'
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime()
  );
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'new' | 'old')}
            >
              <MenuItem value="new">Newest First</MenuItem>
              <MenuItem value="old">Oldest First</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {sortedNewsletters.map((newsletter, index) => (
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
