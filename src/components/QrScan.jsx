import { useState } from 'react';
import { QrReader } from '@otterscan/react-qr-reader';

export const QrScan = () => {
  const [data, setData] = useState('No result');

  const constraints = {
    // width: { min: 1440, ideal: 1920, max: 1920 },
    // height: { min: 960, ideal: 1080, max: 1080 },
    // aspectRatio: 16 / 9,
    facingMode: "environment"
  };

  return (
    <div className='QrScan'>

      <QrReader
        onResult={(result, error) => {
          if(result) {
            setData(result?.text);
          }

          if(error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
        constraints={constraints}
      />

      <p>{data}</p>

    </div>
  );
};