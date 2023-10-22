import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CustomColors } from '../../theme';

const SocialLinks = () => {
  return (
    <span>
      <a
        href="https://www.facebook.com/ziyarah.to.uzbekistan"
        rel="noreferrer"
        target="_blank"
      >
        <FacebookIcon
          sx={{ color: CustomColors.white, marginBottom: -1, marginRight: 1 }}
        />
      </a>
      <a
        href="https://www.facebook.com/tic.uzbek"
        rel="noreferrer"
        target="_blank"
      >
        <FacebookIcon
          sx={{ color: CustomColors.white, marginBottom: -1, marginRight: 1 }}
        />
      </a>
      <a
        href="https://instagram.com/uzbekistantic"
        rel="noreferrer"
        target="_blank"
      >
        <InstagramIcon
          sx={{ color: CustomColors.white, marginBottom: -1, marginRight: 1 }}
        />
      </a>
    </span>
  );
};

export default SocialLinks;
