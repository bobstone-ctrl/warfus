import './App.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

// Import local files
import cloudT from './images/cloud-top.webp';
import cloudB from './images/cloud-bottom.webp';
import cloudM from './images/cloud-mid.webp';

const Parachute = () => {
  const styles = useSpring({
    from: { transform: 'rotate(-4deg)' },
    to: { transform: 'rotate(4deg)' },
    config: { tension: 10, friction: 0 },
    reset: true,
    reverse: true,
    loop: { reverse: true },
  });

  return (
    <animated.img
      src={require('./images/parachute.webp')}
      className='parachute'
      alt="Parachute"
      style={{ ...styles, transformOrigin: 'top center' }}
    />
  );
};

type ButtonMenuProps = {
  buttons: { id: string; label: string }[];
  state: string;
  setState: (id: string) => void;
};

const ButtonMenu: React.FC<ButtonMenuProps> = ({ buttons, state, setState }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
    setState(buttonId);
  };

  return (
    <div className="button-menu">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`menu-button ${activeButton === button.id ? 'active' : ''}`}
          onClick={() => handleClick(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

const buttonData = [
  { id: 'about', label: 'ABOUT US' },
  { id: 'tokenomics', label: 'TOKENOMICS' },
  { id: 'roadmap', label: 'ROADMAP' },
  { id: 'contact', label: 'CONTACT US' },
];

function App() {
  const [state, setState] = useState('about');

  return (
    <div className="App">
      <ButtonMenu buttons={buttonData} state={state} setState={setState} />
      {/* Cloud image elements with alt text */}
      <img src={cloudT} className='top-cloud' alt="Top cloud" />
      <img src={cloudM} className='mid-cloud' alt="Mid cloud" />
      <img src={cloudB} className='bot-cloud' alt="Bottom cloud" />
    </div>
  );
}

export default App;
