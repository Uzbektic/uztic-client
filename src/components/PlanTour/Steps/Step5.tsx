import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomColors } from '../../../theme';
import { touristPlaces } from '../touristPlaces';

const Step5 = () => {
  const theme = useTheme();

  return (
    <div style={{ margin: '20px' }}>
      {touristPlaces.map((item, index) => (
        <Accordion
          key={index}
          style={{
            border: `1px solid ${theme.palette.primary.light}`,
            marginBottom: 5,
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon style={{ color: CustomColors.white }} />
            }
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              {item.category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: theme.palette.background.default,
            }}
          >
            <List>
              {item.places.map((place, idx) => (
                <ListItem key={idx} style={{ paddingLeft: '16px' }}>
                  <ListItemText
                    primary={place}
                    primaryTypographyProps={{
                      style: {
                        fontSize: '1rem',
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Step5;
