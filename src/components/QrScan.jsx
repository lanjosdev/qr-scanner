import { useState } from 'react';
import { QrReader } from '@otterscan/react-qr-reader';

export const QrScan = (props) => {
  const [data, setData] = useState('No result');

  return (
    <div className='QrScan'>

      <QrReader
        onResult={(result, error) => {
          if(!!result) {
            setData(result?.text);
          }

          if(!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />

      <p>{data}</p>
      
    </div>
  );
};