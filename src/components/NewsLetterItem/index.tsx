import React from 'react';
import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InteractiveTooltip from '../Tooltip';

interface NewsLetterItemProps {
  image: string;
  title: string;
  date: string;
  pdfPath: string;
  viewLink: string;
}

const NewsLetterItem: React.FC<NewsLetterItemProps> = ({
  image,
  title,
  date,
  pdfPath,
  viewLink,
}) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} md={6} lg={3}>
      <div
        style={{ padding: 20 }}
        className="animate__animated animate__fadeIn"
      >
        <InteractiveTooltip title={`Click to view ${title}`}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: 350 }}
            onClick={() => navigate(viewLink)}
          />
        </InteractiveTooltip>
        <p>{date}</p>
        <a href={pdfPath} rel="noreferrer" download>
          <Button variant="contained" style={{ width: '100%', marginTop: 10 }}>
            Download
          </Button>
        </a>
      </div>
    </Grid>
  );
};

export default NewsLetterItem;
