import React, { FC } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'
import StaggeredList from './StaggeredList'
import PlayingWithSquares from './PlayingWithSquares';
import Title from './Title';
import SvgMorphing from './SvgMorphing';
import AnimationControls from './AnimationControls';


export const App: FC = () => {


  return (
    <div>
      <Title />
      <Anime
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1000px'
      }}
      config={{

      }}>
        <div>
        </div>
        {/* <div className='component'>
          < StaggeredList />
        </div> */}

        <div className='component'>
          < AnimationControls />
        </div>

        <div className='component'>
          < PlayingWithSquares />
        </div>

        <div className='component'>
          < SvgMorphing />
        </div>
      </Anime>
    </div>



  )


};