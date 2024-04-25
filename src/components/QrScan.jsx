import { useState } from 'react';
import { QrReader } from '@otterscan/react-qr-reader';

import './style.css';

export const QrScan = () => {
  const [data, setData] = useState('Aponte para o QRcode');

  const constraints = {
    // width: { min: 1440, ideal: 1920, max: 1920 },
    // height: { min: 960, ideal: 1080, max: 1080 },
    // aspectRatio: 16 / 9,
    facingMode: "environment"
  };

  return (
    <div className='QrScan'>

      <QrReader
        className='scan'
        onResult={(result, error) => {
          if(result) {
            setData(result?.text);
          }

          if(error) {
            console.info(error);
          }
        }}
        // style={{ width: '100%' }}
        constraints={constraints}
      />

      <p className='result'>
        {data}
      </p>

    </div>
  );
};