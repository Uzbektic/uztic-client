import React from 'react';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';
import { newsLettersUrls } from './constants';

const PDF = () => {
  const { newsletter } = useParams();

  const url = newsLettersUrls[newsletter ?? '0'];

  return (
    <>
      <Navbar bgPrimary={true} />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '93vh',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            border: 'none',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
          }}
          title="PDF Viewer"
          src={url}
          allowTransparency={true}
          seamless
        ></iframe>
      </div>
    </>
  );
};

export default PDF;
