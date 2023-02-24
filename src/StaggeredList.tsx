import React, { FC, useRef } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface StaggeredListProps {

}



const StaggeredList: FC<StaggeredListProps> = (props) => {
  return (
    <Anime
    style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'inherit',
      alignItems: 'left',
      width: '100px',
    }}
    config={{
      translateX: [-100, 0],
      scale: [0, 1],
      loop: true,
      delay: anime.stagger(300, { start: 500, easing: 'easeInOutSine' }),
    }}
  >
    <div style={{ backgroundColor: 'rgb(50, 100, 78)', width: '80px', margin: '5px' }}>
      Playing
    </div>
    <div style={{ backgroundColor: 'rgb(50, 100, 78)', width: '80px', margin: '5px' }}>
      With
    </div>
    <div style={{ backgroundColor: 'rgb(50, 100, 78)', width: '80px', margin: '5px' }}>
      AnimeJS
    </div>
  </Anime>
  )
}

export default StaggeredList;