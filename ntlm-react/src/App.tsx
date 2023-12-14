import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [userName, setUserName] = useState('Loading...');

  useEffect(() => {
    fetch('/getUserName') // Adjust the URL based on your API's address
      .then(response => response.text())
      .then(data => setUserName(data))
      .catch(error => console.error('There was an error!', error));
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <div className="App">
      <header className="App-header">
        <img src={"/reactcontent/logo512.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{userName}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
