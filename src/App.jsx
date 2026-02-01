import { useState } from 'react';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState(null);
  const [flowers, setFlowers] = useState([]);

  const handleNoHover = () => {
    // Generate random position within viewport bounds
    const maxX = window.innerWidth - 150; // Button width
    const maxY = window.innerHeight - 60; // Button height

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoButtonPosition({
      top: `${randomY}px`,
      left: `${randomX}px`
    });
  };

  const handleYesClick = () => {
    setAccepted(true);

    // Generate multiple flowers
    const newFlowers = [];
    for (let i = 0; i < 30; i++) {
      newFlowers.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        emoji: ['🌸', '🌺', '🌹', '🌷', '🌻', '💐'][Math.floor(Math.random() * 6)]
      });
    }
    setFlowers(newFlowers);
  };

  return (
    <div className="container">
      {!accepted ? (
        <div className="question-container">
          <h1 className="question">Will you be my Valentine? 💖</h1>
          <div className="buttons-container">
            <button className="yes-button" onClick={handleYesClick}>
              Yes! 💕
            </button>
            <button
              className="no-button"
              style={noButtonPosition ? {
                position: 'fixed',
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                transition: 'all 0.3s ease'
              } : {}}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="accepted-container">
          <h1 className="celebration">Yay! 🎉💖</h1>
          <p className="message">I knew you'd say yes! 💕</p>
          <div className="flowers-container">
            {flowers.map((flower) => (
              <div
                key={flower.id}
                className="flower"
                style={{
                  left: `${flower.left}%`,
                  animationDelay: `${flower.delay}s`,
                  animationDuration: `${flower.duration}s`
                }}
              >
                {flower.emoji}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
