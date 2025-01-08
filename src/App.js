import React, { useState } from 'react';
import './App.css';

function App() {
  // State to control the About Me box
  const [showAboutMe, setShowAboutMe] = useState(false);

  // Function to toggle the About Me box
  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  return (
    <div className="app">
      <h1 className="name" onClick={toggleAboutMe}>
        Mily Quintero
      </h1>

      {showAboutMe && (
        <div className="about-me-box">
          <p>
            Hi! I’m Mily Quintero, a passionate developer with a love for
            creating beautiful, functional websites and applications. I enjoy
            solving problems and continuously learning new technologies to
            improve my skills.
          </p>
          <button className="close-button" onClick={toggleAboutMe}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

