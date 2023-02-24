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
          // width: '20px',
          // height: '20px',
          // backgroundColor: 'gray',
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
              return anime.random(200, 700);
            },
            duration: 3000,
            easing: 'easeInOutSine'
          },
          rotate: {
            value: () => {
              return anime.random(360, 920);
            },
            duration: 2500,
            easing: 'easeInOutSine'
          },
          scale: {
            value: () => {
              return anime.random(0, 4);
            },
            duration: 1600,
            delay: 1500,
            easing: 'easeInOutQuart'
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
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={forceUpdate}>New Pattern</button>
    </div>
  )
}

export default PlayingWithSquares;