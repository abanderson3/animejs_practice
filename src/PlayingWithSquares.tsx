import { easings } from 'animejs';
import React, { FC, useRef, useState } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface PlayingWithSquaresProps {

}

// function that allows me to force the component to re-render without reloading anything on the page, allows me to reset the randomized animation values
const useForceUpdate = () => {
  const [ value, setValue ] = useState(0);
  return () => setValue(value => value + 1)
}


const PlayingWithSquares: FC<PlayingWithSquaresProps> = (props) => {
  // reference to useForceUpdate within component.
  const forceUpdate = useForceUpdate();

  // style object
  const redsquare = {
    width:'65px',
    height:'65px',
    backgroundColor:'red',
    marginBottom: '20px'
  }

  // reference and OnClick functions
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
          // Move squares on X axis by random value between 100px and 900px, inclusive, for duration of 3500ms
          translateX: {
            value: () => {
              return anime.random(100, 900);
            },
            duration: 3500,
            easing: 'easeInOutSine'
          },

          // Rotate by random degree value, between 9 clockwise or counterclockwise rotations, for duration of 3000ms.
          rotate: {
            value: () => {
              return anime.random(-3240, 3240);
            },
            duration: 3000,
            easing: 'easeInOutSine'
          },

          // Scale by random value between -1 and 3, after 1500ms delay, for duration of 1600ms. Complete scaling at 3100ms.
          scale: {
            value: () => {
              return anime.random(-1, 3);
            },
            duration: 1600,
            delay: 1500,
            easing: 'easeInOutQuart'
          },

          // Move Squares by random value between -150px - 150px on their Y axis, between 2500 - 3000ms, for a random duration between 750ms - 1500ms
          translateY: {
            value: () => {
              return anime.random(-150, 150);
            },
            delay: () => {
              return anime.random(2500, 3000)
            },
            duration: () => {
              return anime.random(750, 1500)
            }
          },

          // Convert square to circle between randomly between 2000-3500, duration of 1000ms
          borderRadius: {
            value: ['0%', '50%'],
            delay: () => {
              return anime.random(2000, 3500)
            },
            duration: 1000,
            easings: 'easeInOutQuad'
          },

          autoplay: false,
          loop: true,
          direction: 'alternate',
          delay: 300,
        }}
        >
        <div style={redsquare}></div>
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