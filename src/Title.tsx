import React, { FC, useRef } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface TitleProps {

}

const Title: FC<TitleProps> = (props) => {

  const titleRef = useRef(null)

  const play = () => titleRef.current.play();

  return (
    <div onClick={play}>
      <Anime
      ref={titleRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(50, 100, 78)',
        border: '1px solid red'
      }}
      config={{
        translateY: [-200, 0],
        delay: anime.stagger(100, {start: 200, easing: 'easeInOutSine'})
      }}>
        <div style={{ backgroundColor: 'inherit', margin: '5px' }}>
          <h1>Playing</h1>
        </div>
        <div style={{ backgroundColor: 'inherit', margin: '5px' }}>
          <h1>With</h1>
        </div>
        <div style={{ backgroundColor: 'inherit', margin: '5px' }}>
          <h1>AnimeJS</h1>
        </div>
      </Anime>
    </div>


  )
}

export default Title