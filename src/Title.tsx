import React, { FC } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface TitleProps {

}

const Title: FC<TitleProps> = (props) => {

  return (
    <Anime
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(28, 44, 78)',
      // border: '1px solid red'
    }}
    config={{
    }}>
      <h1>Playing With AnimeJS</h1>
    </Anime>

  )
}

export default Title