import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Qilin App</h1>
      <p>This is a simple Qilin application running in the browser.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));