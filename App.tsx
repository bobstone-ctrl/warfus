import './App.css';
import React, { useState, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';

// Import local files
import cloudT from './images/cloud-top.webp';
import cloudB from './images/cloud-bottom.webp';
import cloudM from './images/cloud-mid.webp';
import plane from './images/plane.webp';
import parachute from './images/parachute.webp';
import groundT from './images/landscape-top.webp';
import groundB from './images/landscape-bottom.webp';
import groundM from './images/landscape-mid.webp';
import tank from './images/tank.webp';
import banner from './images/banner.png';
import portrait1 from './images/pic_1.webp';
import portrait2 from './images/pic_2.webp';
import portrait3 from './images/pic_3.webp';
import portrait4 from './images/pic_4.webp';
import portrait5 from './images/pic_5.webp';
import portrait6 from './images/frame1.webp';
import portrait7 from './images/frame2.webp';
import dexscrenner from './images/dexscreener_logo.webp';
import solscan from './images/solscan_logo.webp';
import x from './images/x_logo.webp';
import assistant from './images/assistant.webp';

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
      src={parachute}
      className='parachute'
      alt="Parachute"
      style={{ ...styles, transformOrigin: 'top center' }}
    />
  );
};

const ButtonMenu = ({ buttons, state, setState }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
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

const StepSelector = () => {
  const texts = [
    'Step 1: Violate the treaty of Versailles',
    'Step 2: Secretly annex Austria and Czechoslovakia',
    'Step 3: Invade Poland and start WW2',
    'Step 4: Invade France',
    'Step 5: Don\'t invade the Soviet Union',
    'Step 6: Conquer THE WORLD',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="screen-container">
      <button className="roadmapButton" style={{ left: "2vw" }} onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}>{"<"}</button>
      <div className="screen-text">
        {texts[currentIndex].split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </div>
      <button className="roadmapButton" style={{ right: "2vw" }} onClick={() => setCurrentIndex((i) => Math.min(i + 1, texts.length - 1))}>{">"}</button>
    </div>
  );
};

function App() {
  const [state, setState] = useState('about');
  const ref = useRef(null);

  const dialogBoxStyle = useSpring({
    from: { transform: 'translateY(-10%)', opacity: 0 },
    to: { transform: 'translateY(0%)', opacity: 0.8 },
    config: { duration: 600 },
  });

  return (
    <div className="App">
      <ButtonMenu buttons={buttonData} state={state} setState={setState} />
      {/* Example image with alt tag fix */}
      <img src={cloudT} className='top-cloud' alt="Top cloud" />
      <img src={cloudM} className='mid-cloud' alt="Mid cloud" />
      <img src={cloudB} className='bot-cloud' alt="Bottom cloud" />
    </div>
  );
}

export default App;
