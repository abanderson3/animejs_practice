import React, { FC, useRef } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface TitleProps {

}

const Title: FC<TitleProps> = (props) => {

  const titleRef = useRef(null)
  const titleStyle = {

  }

  const play = () => titleRef.current.play();
  const charStyle = {

  }

  return (
    <div onClick={play}>
      <Anime
      ref={titleRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(50, 100, 78)',
        border: '1px solid red',
      }}
      config={{
        translateY: [-200, 0],
        translateX: [-200, 0],
        delay: anime.stagger(70, {start: 100, easing: 'easeInCirc'}),
        // direction: 'alternate',
        // autoplay: true,
        // loop: 3
      }}>
          <h1>P</h1>
          <h1>l</h1>
          <h1>a</h1>
          <h1>y</h1>
          <h1>i</h1>
          <h1>n</h1>
          <h1>g</h1>
          <h1>&nbsp;</h1>
          <h1>W</h1>
          <h1>i</h1>
          <h1>t</h1>
          <h1>h</h1>
          <h1>&nbsp;</h1>
          <h1>A</h1>
          <h1>n</h1>
          <h1>i</h1>
          <h1>m</h1>
          <h1>e</h1>
          <h1>J</h1>
          <h1>S</h1>
      </Anime>

    </div>


  )
}

export default Title