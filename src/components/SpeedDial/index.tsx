import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useNavigate } from 'react-router-dom';
import { StyledSpeedDial } from './StyledComponents';
import MosqueIcon from '@mui/icons-material/Mosque';
import { CustomColors } from '../../theme';

const actions = [
  { icon: 'Home', name: 'Home', link: '/' },
  { icon: 'About us', name: 'About Us', link: '/about-us' },
  { icon: 'Tashkent', name: 'Tashkent', link: '/tashkent' },
  { icon: 'Samarkand', name: 'Samarkand', link: '/samarkand' },
  { icon: 'Bukhara', name: 'Bukhara', link: '/bukhara' },
  { icon: 'Khiva', name: 'Khiva', link: '/khiva' },
  { icon: 'Our Guests', name: 'Our Guests', link: '/our-guests' },
  { icon: 'News Letters', name: 'News Letters', link: '/news-letter' },
];

export default function ActionSpeedDial() {
  const navigate = useNavigate();

  const handlePageChange = (link: string) => () => {
    navigate(link);
  };

  return (
    <Box sx={{ position: 'relative', height: 320 }}>
      <StyledSpeedDial
        ariaLabel="Site Links"
        icon={<MosqueIcon />}
        direction={'down'}
        sx={{
          display: 'contents',
          '& .MuiSpeedDialAction-staticTooltipLabel': {
            color: 'red',
            width: '150px',
            background: 'red',
            boxShadow: 'none',
          },
          '& .MuiSpeedDialAction-staticTooltipLabel:hover': {
            color: 'white',
          },

          '& .MuiSpeedDialAction-staticTooltipLabel.Mui-selected': {
            color: 'white',
          },

          '& .MuiSpeedDialAction-staticTooltipLabel.Mui-selected:hover': {
            color: 'white',
          },

          '& .MuiButtonBase-root': {
            boxShadow: 'none',
            borderRadius: 5,
          },

          '& .MuiButtonBase-root:hover': {
            boxShadow: 'none',
          },

          '& .MuiSpeedDialAction-fab': {
            borderRadius: '0',
            width: 150,
            justifyContent: 'flex-start',
            borderBottom: '1px solid #fff',
            padding: 1,

            fontWeight: 'bold',
            fontSize: 14,
            margin: '0',
            color: '#fff',
            marginLeft: 2,
            background: CustomColors.primary,

            '&:hover': {
              backgroundColor: CustomColors.primaryLight,
              color: 'white',
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            onClick={handlePageChange(action.link)}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
