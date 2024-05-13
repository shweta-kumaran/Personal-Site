import React, { useEffect, useState } from 'react';
import name from './assets/name.gif';

function App() {
  const [gifSrc, setGifSrc] = useState(name);

  useEffect(() => {
    const reloadGif = () => {
      setGifSrc(`${name}?${new Date().getTime()}`);
    };

    reloadGif();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
      }}>
        <div style={{
          fontFamily: 'PT Serif', 
          fontSize: '36px', 
          color: '#291604',
          marginTop: '100px',
          marginBottom: '-50px'
        }}>hello, my name is</div>
        <img
          src={gifSrc}
          alt="Animated name signature"
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            width: 'auto',
            position: 'relative', 
            left: '-3%'
          }}
        />
      </div>
    </div>
  );
}

export default App;







