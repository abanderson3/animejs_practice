import React, { FC, useRef, useState } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface PlayingWithSquaresProps {

}

const useForceUpdate = () => {
  const [ value, setValue ] = useState(0);
  return () => setValue(value => value + 1)
}


const PlayingWithSquares: FC<PlayingWithSquaresProps> = (props) => {

  const forceUpdate = useForceUpdate();


  const redsquare = {
    width:'50px',
    height:'50px',
    backgroundColor:'red',
    marginBottom: '20px'
  }

  const divSquareRef = useRef(null);

  const play = () => divSquareRef.current.play();
  const pause = () => divSquareRef.current.pause();


  return (
    <div>
      <div className='subTitle'>Playing With Squares</div>
      <Anime
        ref={divSquareRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        config={{
          // translateX: {
          //   value: 650,
          //   duration: 3000,
          //   easing: 'easeInOutSine'
          // },
          autoplay: false,
          translateX: {
            value: () => {
              return anime.random(100, 900);
            },
            duration: 3500,
            easing: 'easeInOutSine'
          },
          rotate: {
            value: () => {
              return anime.random(180, 3240);
            },
            duration: 3000,
            easing: 'easeInOutSine'
          },
          scale: {
            value: () => {
              return anime.random(0, 3);
            },
            duration: 1600,
            delay: 1500,
            easing: 'easeInOutQuart'
          },
          translateY: {
            value: () => {
              return anime.random(-100, 100);
            },
            delay: () => {
              return anime.random(2500, 3000)
            },
            duration: () => {
              return anime.random(750, 1000)
            }
          },
          direction: 'alternate',
          delay: 600,
          loop: true
        }}
        >
        <div style={redsquare}></div>
        <div style={redsquare}></div>
        <div style={redsquare}></div>



      </Anime>
      <div className='small-button-panel'>
        <button onClick={play}>Play</button>
        <button onClick={forceUpdate}>New Pattern</button>
        <button onClick={pause}>Pause</button>

      </div>

    </div>
  )
}

export default PlayingWithSquares;