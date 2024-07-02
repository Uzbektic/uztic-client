import React from 'react';
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';

const listings: { [key: string]: string } = {
  '0': 'https://online.fliphtml5.com/xjgcf/erhs',
  '1': 'https://online.fliphtml5.com/xjgcf/gtiy',
  '2': 'https://online.fliphtml5.com/xjgcf/ukxg',
  '3': 'https://online.fliphtml5.com/xjgcf/yfgk',
  '4': 'https://online.fliphtml5.com/xjgcf/ikcv',
  '5': 'https://online.fliphtml5.com/xjgcf/fjyj/',
  '6': 'https://online.fliphtml5.com/xjgcf/pczt/',
};

const PDF = () => {
  const { newsletter } = useParams();

  const url = listings[newsletter ?? '0'];

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
