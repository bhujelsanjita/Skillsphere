import "./index.css";

import React from 'react';

// Functional Component
const App: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
