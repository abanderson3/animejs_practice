import React, { useRef, FC } from 'react'
import Anime, { anime } from 'react-animejs-wrapper'


interface AnimationControlsProps {

}
  /*
  const random = () => {
    return anime.random(100, 500);
  },
  */

const AnimationControls: FC<AnimationControlsProps> = (props) => {
  const blueSquare = {
    height: '65px',
    width: '65px',
    backgroundColor: 'lightBlue',
    marginTop: '5px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem'
  };

  // Need to use "useRef" to create a reference for the Anime component, initially set to null. This allows you to access and use the methods on the Anime component from the AnimeJS library.
  const animatedSquaresRef = useRef(null)

  // Assign AnimeJS methods to variables for use as OnClick functions.
  const restart = () => animatedSquaresRef.current.restart();
  const play = () => animatedSquaresRef.current.play();
  const pause = () => animatedSquaresRef.current.pause();
  const reverse = () => animatedSquaresRef.current.reverse();
  const seek = () => animatedSquaresRef.current.seek(1000);
  const seekPercent = () => animatedSquaresRef.current.seekPercent(50);

  return (
    <>
    <div className='subTitle'>Playing With Buttons</div>
      <Anime
        ref={animatedSquaresRef}
        config={{
          translateX: 950,
          duration: 2000,
          delay: anime.stagger(110),
          autoplay: false,
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutSine',

          // scale: anime.random(0, 2)
          // rotate: anime.stagger([-360, 360]),

        }}

      >
        <div style={blueSquare}>0ms</div>
        <div style={blueSquare}>100ms</div>
        <div style={blueSquare}>200ms</div>
        <div style={blueSquare}>300ms</div>

      </Anime>
      <div className="button-panel">
        <button onClick={restart}>Reset</button>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reverse}>Reverse</button>
        <button onClick={seek}>At 1000 ms</button>
        <button onClick={seekPercent}>At 50%</button>
      </div>
    </>
  )
}

export default AnimationControls;