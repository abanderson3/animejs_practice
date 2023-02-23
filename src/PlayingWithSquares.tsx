import React, { FC } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface PlayingWithSquaresProps {

}

const PlayingWithSquares: FC<PlayingWithSquaresProps> = (props) => {


  return (
      <Anime
        style={{
          display: 'flex',
          flexDirection: 'column',


          // width: '20px',
          // height: '20px',
          // backgroundColor: 'gray',
        }}
        config={{
          translateX: {
            value: 650,
            duration: 3000,
            easing: 'easeInOutSine'
          },
          rotate: {
            value: 720,
            duration: 2500,
            easing: 'easeInOutSine'
          },
          scale: {
            value: 2,
            duration: 1600,
            delay: 1500,
            easing: 'easeInOutQuart'
          },
          direction: 'alternate',
          delay: 600,
          loop: true
        }}
      >
        <div style={{width:'20px', height:'20px', backgroundColor:'red', marginBottom: '1rem'}}></div>
        <div style={{width:'20px', height:'20px', backgroundColor:'red', marginBottom: '1rem'}}></div>
        <div style={{width:'20px', height:'20px', backgroundColor:'red', marginBottom: '1rem'}}></div>

      </Anime>
  )
}

export default PlayingWithSquares;