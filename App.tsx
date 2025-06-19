import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useSpring , animated} from 'react-spring';
import { useInView } from 'react-intersection-observer';

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
import dance from './images/hitler_dancing.gif';
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
import screen from './images/screen.webp';

type Button = {
  id: string;
  label: string;
};

interface ScrollTextProps {
  text: string;
}

interface ButtonMenuProps {
  buttons: Button[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

function Parachute() {
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
      style={{
        ...styles,
        transformOrigin: 'top center',
      }}
    />
  );
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ buttons,state, setState }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="button-menu">
      {buttons.map((button: Button) => (
        <button
          key={button.id}
          className={`menu-button ${activeButton === button.id ? 'active' : ''}`}
          onClick={() => {
            handleClick(button.id);
            setState(button.id);
            }}>
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
  const texts = ['Step 1: Violate the treaty of Versailles \n ૮₍´｡ᵔ ꈊ ᵔ｡`₎ა', 
                  'Step 2: Secretly annex Austria and Czechoslovakia 🤫 🤭', 
                  'Step 3: Invade Poland and start WW2 🙈',
                  'Step 4: Invade France 🥐🇫🇷🥖',
                  'Step 5: Don\'t invade the Soviet Union \n ヽ༼☉ɷ⊙༽ﾉ (IMPORTANT)☃️❗️',
                  'Step 6: Conquer \n THE WORLD \n 🌍🌎🌏 ৻(  •̀ ᗜ •́  ৻)',];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="screen-container">
      <button className="roadmapButton" style={{left:"2vw"}} onClick={handlePrevious}>{"<"}</button>
      <div className="screen-text">
        {texts[currentIndex].split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </div>
      <button className="roadmapButton" style={{right:"2vw"}} onClick={handleNext}>{">"}</button>
    </div>
  );
};


function App() {
  const [state, setState] = useState('about');

  const ref = useRef<IParallax | null>(null);

  const dialogBoxStyle = useSpring({
    from: { transform: 'translateY(-10%)', opacity: 0},
    to: { transform: 'translateY(-0%)', opacity: 0.8},
    config: { duration: 600},
  });

  const getContent = (state: string) => {
    switch (state) {
      case 'about':
        return <Parallax ref={ref} pages={4} style={{zIndex : 1}}>
          {/* Clouds */}
          <ParallaxLayer offset={0.1} speed={0.1} >
            <img src={cloudT} className='top-cloud' alt='Cloud Top' />
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={0.3}>
            <img src={cloudM} className='mid-cloud' alt='Cloud Middle' />
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={0.5}>
            <img src={cloudB} className='bot-cloud' alt='Cloud Bottom' />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1} >
            <div className='dialogue' >
              <img src={banner} className='banner' alt='Banner' />
              <animated.p style={ {...dialogBoxStyle}}>
              { `Konnichiwa! (≧ω≦) ✨✨
                You look super strong 💪 and smart 🧠,just what we need! (≧ヮ≦) 💕`
                  .split('\n')
                  .map((line, i) => <span key={i}>{line}<br /></span>)
                } 
              </animated.p>
            </div>
          </ParallaxLayer>

          {/* Plane */}
          <ParallaxLayer offset={0.99} speed={0.7} >
            <img src={plane} className='plane' alt='Plane' />
          </ParallaxLayer>

          {/* Parachute */}
          <ParallaxLayer sticky={{ start: 0.99, end: 1.9 }} speed={0.1} >
            <Parachute />
          </ParallaxLayer>

          <ParallaxLayer offset={1.2} speed={1} >
            <div className='dialogue2' >
              <animated.p style={ {...dialogBoxStyle}}>
                { ` I'm part of a team that defends the world from scary hooked nosed monsters 
                🇮🇱  (｡Ó﹏Ò｡)   🇮🇱 
                and we're on a mission to restore Germany's glory 
                ( ◡̀_◡́)ᕤ
                Will you joins us? ദ്ദി ˉ͈̀꒳ˉ͈́ )✧`
                  .split('\n')
                  .map((line, i) => <span key={i}>{line}<br /></span>)
                } 
              </animated.p>
            </div>
          </ParallaxLayer>

          {/* Ground */}
          <ParallaxLayer offset={2.5} speed={0.1} >
            <img src={groundT} className='top-ground' alt='Ground Top' />
          </ParallaxLayer>
          <ParallaxLayer offset={2.9} speed={0.3}>
            <img src={groundM} className='mid-ground' alt='Ground Middle' />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.8}>
            <img src={groundB} className='bot-ground' alt='Ground Bottom' />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1} >
            <div className='dialogue' >
              <animated.p style={ {...dialogBoxStyle}}>-
                { ` It's about more than just fighting, it's about forging unbreakable bonds 
                  ⸜(｡ ˃ ᵕ ˂ )⸝♡
                  eating ramen together 
                  🍜 ♡UωU♡ 
                  and maybe even finding a big titty warfu for yourself.
                  ≽^•⩊•^≼ `
                  .split('\n')
                  .map((line, i) => <span key={i}>{line}<br /></span>)
                } 
              </animated.p>
            </div>
          </ParallaxLayer>

          {/* Tank */}
          <ParallaxLayer offset={3.5} speed={0.8} >
            <img src={tank} className='tank' alt='Tank'/>
          </ParallaxLayer>

          </Parallax>;
      case 'roadmap':
        return <div>
          <img src={assistant} className='assistant' alt='Assistant'/>
          <StepSelector />
        </div>;
      case 'tokenomics':
        return <div style={{position : "relative", marginBottom: "10vh"}}>
          <img src={portrait1} className='portrait1' alt='Portrait 1'/>
          <img src={portrait2} className='portrait2' alt='Portrait 2'/>
          <img src={portrait3} className='portrait3' alt='Portrait 3'/>
          <img src={portrait4} className='portrait4' alt='Portrait 4'/>
          <img src={portrait5} className='portrait5' alt='Portrait 5'/>
          <div className='portrait6-container'>
            <img src={portrait6} className='portrait6' alt='Portrait 6' />
            <button
              className='portrait-text-container'
              onClick={() => {
                navigator.clipboard.writeText('');
              }}
            >
              {` 
                Fair launch through pump.fun 
                
                CA: TBD`
                .split('\n')
                .map((line, i) => <span key={i}>{line}<br /></span>)
              } 
            </button>

          </ div>
          <div className='portrait7-container'>
            <img src={portrait7} className='portrait7' alt='Portrait 7' />
            <p className='portrait-text-container'>
              { ` 1,000,000,000 $WARFUS
              
              5% team allocation`
                  .split('\n')
                  .map((line, i) => <span key={i}>{line}<br /></span>)
              } 
            </p>
            
          </ div>
        </div>;
      case 'contact':
        return <div /* style={{marginTop : "-25vh"}} */>
          <button className='contact_buttons' onClick={() => window.open('https://x.com/warfusonline', '_blank', 'noopener,noreferrer')}>
            <img src={x} className='contact_logos' alt='X logo'/>
          </button>
          <button className='contact_buttons' onClick={() => window.open('https://dexscreener.com', '_blank', 'noopener,noreferrer')}>
            <img src={dexscrenner} className='contact_logos' alt='Dexscreener logo'/>
          </button>
          <button className='contact_buttons' onClick={() => window.open('https://solscan.io', '_blank', 'noopener,noreferrer')}>
            <img src={solscan} className='contact_logos' alt='Solscan logo'/>
          </button>
        </div>;
      default:
        return null;
    }
  }

  const content = getContent(state);
  
  return (
    <div className="App" >
      <ButtonMenu buttons={buttonData} state={state} setState={setState}/>
      {content}
      <div className='footer'>
        <p>© 2025 WARFUS</p>
      </div>
    </div>
  );
}

export default App;