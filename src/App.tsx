import React, { FC } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'
import StaggeredList from './StaggeredList'
import MyAnimeComponent from './AnimationControls';
import PlayingWithSquares from './PlayingWithSquares';
import Title from './Title';


export const App: FC = () => {


  return (
    <div>
      <Title />
      <Anime
      style={{
        backgroundColor: 'rgb(28, 44, 78)',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red',
        width: '1000px'
      }}
      config={{

      }}>
        <div>
        </div>
        <div className='component'>
          < StaggeredList />
        </div>

        <div className='component'>
          < MyAnimeComponent />
        </div>

        <div className='component'>
          < PlayingWithSquares />
        </div>
      </Anime>
    </div>



  )


};