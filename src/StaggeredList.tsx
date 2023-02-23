import React, { FC } from 'react';
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
      backgroundColor: 'lightgrey',
      alignItems: 'left',
      width: '80px',
    }}
    config={{
      translateX: [-100, 0],
      scale: [0, 1],
      loop: true,
      delay: anime.stagger(300, { start: 500, easing: 'easeOutQuad' }),
    }}
  >
    <div style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}>
      Transit
    </div>
    <div style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}>
      Food
    </div>
    <div style={{ backgroundColor: 'grey', width: '50px', margin: '5px' }}>
      Events
    </div>
  </Anime>
  )
}

export default StaggeredList;