import React, { useRef } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'



const MyAnimeComponent = () => {
  const blueSquare = {
    height: '50px',
    width: '50px',
    backgroundColor: 'lightBlue',
    marginTop: '5px'
  };

  const animatedSquaresRef = useRef(null)

  const restart = () => animatedSquaresRef.current.restart();
  const play = () => animatedSquaresRef.current.play();
  const pause = () => animatedSquaresRef.current.pause();
  const reverse = () => animatedSquaresRef.current.reverse();
  const seek = () => animatedSquaresRef.current.seek(1000);
  const seekPercent = () => animatedSquaresRef.current.seekPercent(50);


  /*
() => {
  return anime.random(100, 500);
},
  */
  return (
    <>
    <div className='subTitle'>Playing With Buttons</div>
      <Anime
        ref={animatedSquaresRef}
        config={{
          translateX: 500,
          duration: 2000,
          delay: function (_:number, i:number) {
            return i * 100;
          },
          autoplay: false,
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutSine',
          // rotate: anime.stagger([-360, 360]),
        }}

      >
        <div style={blueSquare}>1</div>
        <div style={blueSquare}>2</div>
        <div style={blueSquare}>3</div>
        <div style={blueSquare}>4</div>
      </Anime>
      <button onClick={restart}>Reset Animation</button>
      <button onClick={play}>Play Animation</button>
      <button onClick={pause}>Pause Animation</button>
      <button onClick={reverse}>Reverse Animation</button>
      <button onClick={seek}>Seek to 1000 ms</button>
      <button onClick={seekPercent}>Seek to 50%</button>
    </>
  )
}

export default MyAnimeComponent;