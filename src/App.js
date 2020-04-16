import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [url] = useState('https://modelfact.com/wp-content/uploads/2019/10/sasha-grey-2.jpg')
  const [token] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
  return (
    <>
      <h1>Abaixo o QRCode retorna o seguinte valor</h1>
      <ul>
        <li>URL: {url}</li>
        <li>TOKEN: {token}</li>
      </ul>
      <QRCode 
        value={`${url}?${token}`} 
        size={256} 
      />
    </>
  );
}

export default App;
