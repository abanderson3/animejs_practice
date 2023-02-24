import React, { FC, useRef } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface SvgMorphingProps {

}

const SvgMorphing: FC<SvgMorphingProps> = (props) => {

  const morphingRef = useRef(null);

  const play = () => morphingRef.current.play()

  return (
    <div>
      <Anime
      style={{
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

      }}
      ref={morphingRef}
      config={{
        targets: '#demo-svg polygon',
        points: [
          {value: '200 120, 400 120, 600 120, 600 220, 600 320, 600 420, 400 420, 200 420, 200 320, 200 220, 200 120'},
          {value: '280 180, 400 120, 520 180, 600 220, 600 320, 600 540, 400 240, 200 520, 200 320, 200 220, 280 180'},
          {value: '280 180, 400 120, 520 180, 600 220, 600 320, 500 360, 400 240, 300 360, 200 320, 200 220, 280 180'},
          {value: '280 180, 400 500, 520 180, 600 220, 600 320, 500 360, 400 240, 300 360, 200 320, 200 220, 280 180'},
          {value: '280 180, 400 500, 520 180, 600 220, 600 320, 500 80, 400 240, 300 80, 200 320, 200 220, 280 180'},
          {value: '260 180, 400 500, 520 180, 600 220, 600 140, 500 80, 400 240, 300 80, 200 140, 200 220, 260 180'},
          {value: '240 280, 400 500, 560 280, 600 220, 600 140, 500 80, 400 160, 300 80, 200 140, 200 220, 240 280'}
        ],
        easing: 'easeInOutQuart',
        duration: 2500,
        loop: 1,
        direction: 'alternate',
        autoplay: false,
      }}>
        <div className='svg-subTitle'>Playing With SVGs</div>
        <svg onClick={play} id="demo-svg" >
          <polygon stroke="none" fill="purple" points="200 120, 400 120, 600 120, 600 220, 600 320, 600 420, 400 420, 200 420, 200 320, 200 220, 200 120"></polygon>
        </svg>
      </Anime>
      <Anime
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg id="demo-text">
          <polygon></polygon>
        </svg>
      </Anime>
    </div>

  )
}

export default SvgMorphing;