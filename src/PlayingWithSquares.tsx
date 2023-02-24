import { easings } from 'animejs';
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

  //
  const redsquare = {
    width:'60px',
    height:'60px',
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
          // Move squares to left by random value between 100px and 900px
          translateX: {
            value: () => {
              return anime.random(100, 900);
            },
            duration: 3500,
            easing: 'easeInOutSine'
          },
          // Rotate squares
          rotate: {
            value: () => {
              return anime.random(-3240, 3240);
            },
            duration: 3000,
            easing: 'easeInOutSine'
          },
          scale: {
            value: () => {
              return anime.random(-1, 3);
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
          autoplay: false,
          loop: true,
          direction: 'alternate',
          delay: 300,


          // borderRadius: {
          //   value: ['0%', '50%'],
          //   delay: () => {
          //     return anime.random(2000, 3500)
          //   },
          //   duration: 1000,
          //   easings: 'easeInOutQuad'
          // },


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