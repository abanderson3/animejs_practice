import React, { FC, useRef } from 'react';
// const anime = require('animejs');
import Anime, { anime } from 'react-animejs-wrapper'

interface SvgMorphingProps {

}

const SvgMorphing: FC<SvgMorphingProps> = (props) => {

  // references to all 3 SVGs
  const morphingRef = useRef(null);
  const traceRef = useRef(null);
  const superMorph = useRef(null);

  // onClick functions
  const playMorph = () => morphingRef.current.play();
  const playTrace = () => traceRef.current.play();
  const playSuperMorph = () => superMorph.current.play();

  return (
    <div>
      <Anime
        ref={morphingRef}
        style={{
          // border: '1px solid red',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'

        }}
        config={{
          targets: '#demo-svg polygon',
          // point mapping data generated by SVG Path builder
          points: [
            {value: '200 120, 400 120, 600 120, 600 220, 600 320, 600 420, 400 420, 200 420, 200 320, 200 220, 200 120'},
            {value: '280 180, 400 120, 520 180, 600 220, 600 320, 600 540, 400 240, 200 520, 200 320, 200 220, 280 180'},
            {value: '280 180, 400 120, 520 180, 600 220, 600 320, 500 360, 400 240, 300 360, 200 320, 200 220, 280 180'},
            {value: '280 180, 400 500, 520 180, 600 220, 600 320, 500 360, 400 240, 300 360, 200 320, 200 220, 280 180'},
            {value: '280 180, 400 500, 520 180, 600 220, 600 320, 500 80, 400 240, 300 80, 200 320, 200 220, 280 180'},
            {value: '260 180, 400 500, 520 180, 600 220, 600 140, 500 80, 400 240, 300 80, 200 140, 200 220, 260 180'},
            {value: '240 280, 400 500, 560 280, 600 220, 600 140, 500 80, 400 160, 300 80, 200 140, 200 220, 240 280', duration: 550}
          ],
          easing: 'easeInOutQuart',
          duration: 2500,
          loop: 4,
          direction: 'alternate',
          autoplay: false,
        }}>

        <div className='svg-subTitle'>Playing With SVGs</div>

        {/* Original SVG is defined here */}
        <svg onClick={playMorph} id="demo-svg" >
          <polygon stroke="none" fill="#8934eb" points="200 120, 400 120, 600 120, 600 220, 600 320, 600 420, 400 420, 200 420, 200 320, 200 220, 200 120"></polygon>
        </svg>

      </Anime>


      {/* Same as above but slightly more comlicated SVG with more points */}
      <Anime
        ref={superMorph}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        config={{
          targets: '#demo-superMorph polygon',
          points: [
            {value: '20 580, 80 540, 300 580, 480 580, 700 540, 760 580, 760 480, 760 380, 700 300, 760 200, 760 80, 760 40, 660 80, 600 40, 500 40, 400 40, 300 40, 180 40, 80 80, 20 40, 20 120, 20 200, 80 300, 20 380, 20 440, 20 520, 20 580'},
            {value: '20 580, 180 480, 280 580, 520 580, 600 480, 760 580, 760 480, 760 380, 640 300, 760 200, 760 80, 760 40, 660 80, 600 40, 500 40, 400 180, 300 40, 180 40, 120 80, 20 40, 20 120, 20 200, 160 300, 20 380, 20 440, 20 520, 20 580'},
            {value: '20 580, 180 480, 280 580, 520 580, 600 480, 760 580, 700 480, 760 380, 640 300, 760 200, 760 120, 760 40, 660 80, 600 40, 600 180, 400 180, 180 180, 180 40, 120 80, 20 40, 20 120, 20 200, 140 300, 20 380, 20 380, 60 480, 20 580'},
            {value: '20 580, 180 480, 280 580, 520 580, 600 480, 760 580, 700 480, 560 380, 640 300, 760 200, 760 120, 680 160, 660 80, 600 40, 520 180, 400 100, 280 180, 180 40, 120 80, 100 160, 20 120, 20 200, 140 300, 200 380, 200 380, 60 480, 20 580 '},
            {value: '20 580 , 180 480 , 280 580 , 520 580 , 600 480 , 760 580 , 700 480 , 560 380 , 560 280 , 760 200 , 760 120 , 680 160 , 660 100 , 680 40 , 520 180 , 380 280 , 260 180 , 100 40 , 120 100 , 100 160 , 20 120 , 20 200 , 220 280 , 220 380 , 220 380 , 60 480 , 20 580'},
            {value: '20 580, 180 440, 280 500, 500 500, 580 440, 760 580, 700 480, 560 380, 560 340, 760 200, 760 120, 660 220, 660 100, 680 40, 520 280, 380 280, 240 280, 100 40, 120 100, 120 220, 20 120, 20 200, 220 340, 220 380, 220 380, 60 480, 20 580'},
            {value: ['20 580, 180 440, 280 500, 500 500, 580 440, 760 540, 700 480, 560 380, 560 340, 760 200, 760 120, 660 220, 660 100, 680 40, 520 280, 380 280, 240 280, 100 40, 120 100, 120 220, 20 120, 20 200, 220 340, 220 380, 220 380, 60 480, 20 580 ', '20 540, 180 440, 280 500, 500 500, 580 440, 760 580, 700 480, 560 380, 560 340, 760 200, 760 120, 660 220, 660 100, 680 40, 520 280, 380 280, 240 280, 100 40, 120 100, 120 220, 20 120, 20 200, 220 340, 220 380, 220 380, 60 480, 20 540' ], duration: 500, delay: 300},
          ],
          easing: 'easeInOutQuad',
          duration: 2000,
          loop: 4,
          direction: 'alternate',
          autoplay: false,
        }}
      >
        {/* Original SVG defined here */}
        <svg onClick={playSuperMorph} id="demo-superMorph">
          <polygon stroke="none" fill="red" points="20 580, 80 580, 340 580, 480 580, 700 580, 760 580, 760 480, 760 380, 760 300, 760 160, 760 80, 760 40, 660 40, 600 40, 500 40, 400 40, 300 40, 180 40, 80 40, 20 40, 20 120, 20 200, 20 300, 20 380, 20 440, 20 520, 20 580"></polygon>
        </svg>
      </Anime>




      <div className='subTitle'>Playing With Path Tracing</div>

      <Anime
      ref={traceRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '5.7rem',
        backgroundColor: 'inherit',
        // border: '1px solid black'
      }}
      config={{
        targets: '#demo-text path',
        strokeDashoffset: [anime.setDashoffset, 2000],
        easing: 'easeInQuad',
        duration: 5000,
        direction: 'alternate',
        loop: 1,
        autoplay: false,
      }}>
        <svg onClick={playTrace}id="demo-text" width='1000'>
          <path stroke='black' stroke-width="1" fill='none' d="M 3.6 74.3 L 0 74.3 L 0 5.5 L 3.6 5.5 L 3.6 37.8 L 47.2 37.8 L 47.2 5.5 L 50.8 5.5 L 50.8 74.3 L 47.2 74.3 L 47.2 41.2 L 3.6 41.2 L 3.6 74.3 Z M 399.9 74.3 L 357.3 74.3 L 357.3 5.5 L 399.9 5.5 L 399.9 8.9 L 360.9 8.9 L 360.9 37.8 L 395.2 37.8 L 395.2 41.2 L 360.9 41.2 L 360.9 70.9 L 399.9 70.9 L 399.9 74.3 Z M 203.5 74.3 L 199.9 74.3 L 199.9 5.5 L 203.5 5.5 L 203.5 37.7 L 220.8 37.7 L 246.4 5.5 L 250.6 5.5 L 223.8 39.4 L 250.9 74.3 L 246.6 74.3 L 220.8 41.1 L 203.5 41.1 L 203.5 74.3 Z M 292.4 74.3 L 288.8 74.3 L 288.8 5.5 L 319.4 5.5 Q 325.8 5.5 329.4 7.15 A 13.631 13.631 0 0 1 332.08 8.747 A 9.996 9.996 0 0 1 334.65 11.65 A 16.016 16.016 0 0 1 336.614 17.349 A 18.497 18.497 0 0 1 336.7 18 Q 337.1 21.5 337.1 25.2 Q 337.1 29.3 336.45 33.15 Q 335.8 37 333.4 39.9 A 10.229 10.229 0 0 1 330.745 42.131 Q 329.471 42.895 327.848 43.466 A 22.964 22.964 0 0 1 325.7 44.1 L 337.8 74.3 L 333.8 74.3 L 321.7 43.9 L 323.2 44.5 A 6.356 6.356 0 0 1 322.666 44.626 Q 322.105 44.734 321.35 44.8 A 18.904 18.904 0 0 1 320.703 44.844 Q 319.962 44.882 318.915 44.895 A 88.19 88.19 0 0 1 317.9 44.9 L 292.4 44.9 L 292.4 74.3 Z M 677.6 74.3 L 674 74.3 L 674 5.5 L 704.6 5.5 Q 711 5.5 714.6 7.15 A 13.631 13.631 0 0 1 717.28 8.747 A 9.996 9.996 0 0 1 719.85 11.65 A 16.016 16.016 0 0 1 721.814 17.349 A 18.497 18.497 0 0 1 721.9 18 Q 722.3 21.5 722.3 25.2 Q 722.3 29.3 721.65 33.15 Q 721 37 718.6 39.9 A 10.229 10.229 0 0 1 715.945 42.131 Q 714.671 42.895 713.048 43.466 A 22.964 22.964 0 0 1 710.9 44.1 L 723 74.3 L 719 74.3 L 706.9 43.9 L 708.4 44.5 A 6.356 6.356 0 0 1 707.866 44.626 Q 707.305 44.734 706.55 44.8 A 18.904 18.904 0 0 1 705.903 44.844 Q 705.162 44.882 704.115 44.895 A 88.19 88.19 0 0 1 703.1 44.9 L 677.6 44.9 L 677.6 74.3 Z M 181.5 5.9 L 181.5 9.1 Q 179.5 8.8 177.05 8.55 Q 174.6 8.3 172.05 8.2 Q 169.5 8.1 167.3 8.1 Q 162.456 8.1 158.778 8.406 A 57.751 57.751 0 0 0 156.4 8.65 A 23.82 23.82 0 0 0 153.464 9.194 Q 151.991 9.57 150.786 10.121 A 11.556 11.556 0 0 0 149.35 10.9 A 9.382 9.382 0 0 0 146.291 14.156 A 12.657 12.657 0 0 0 145.4 16.05 Q 144.1 19.5 143.65 25.3 Q 143.344 29.242 143.246 34.57 A 290.622 290.622 0 0 0 143.2 39.9 Q 143.2 48.7 143.65 54.5 Q 143.944 58.291 144.601 61.078 A 21.773 21.773 0 0 0 145.4 63.75 A 11.977 11.977 0 0 0 146.781 66.413 A 9.159 9.159 0 0 0 149.35 68.9 A 12.539 12.539 0 0 0 151.897 70.13 Q 153.856 70.832 156.4 71.15 A 62.348 62.348 0 0 0 159.995 71.485 Q 163.238 71.7 167.3 71.7 A 93.686 93.686 0 0 0 171.65 71.594 A 116.973 116.973 0 0 0 174.85 71.4 A 160.441 160.441 0 0 0 177.74 71.161 Q 179.168 71.029 180.436 70.882 A 86.551 86.551 0 0 0 181.9 70.7 L 181.9 74.1 A 48.422 48.422 0 0 1 180.302 74.311 Q 179.418 74.413 178.427 74.501 A 88.367 88.367 0 0 1 177.2 74.6 Q 174.5 74.8 171.65 74.95 Q 168.8 75.1 166.3 75.1 Q 161.094 75.1 157.089 74.719 A 57.325 57.325 0 0 1 154.75 74.45 A 24.852 24.852 0 0 1 151.441 73.78 Q 149.729 73.302 148.336 72.595 A 12.957 12.957 0 0 1 147.05 71.85 A 11.64 11.64 0 0 1 143.705 68.422 A 15.683 15.683 0 0 1 142.45 66.05 A 22.938 22.938 0 0 1 141.38 62.879 Q 140.942 61.222 140.63 59.261 A 54.481 54.481 0 0 1 140.2 55.8 A 119.771 119.771 0 0 1 139.837 50.623 Q 139.719 48.249 139.659 45.568 A 256.728 256.728 0 0 1 139.6 39.9 A 244.295 244.295 0 0 1 139.683 33.343 Q 139.753 30.744 139.882 28.445 A 113.766 113.766 0 0 1 140.2 24.15 Q 140.615 19.753 141.534 16.555 A 22.139 22.139 0 0 1 142.45 13.95 A 15.264 15.264 0 0 1 144.212 10.841 A 11.731 11.731 0 0 1 147.05 8.1 A 14.453 14.453 0 0 1 150.152 6.532 Q 151.648 5.978 153.427 5.627 A 27.727 27.727 0 0 1 154.75 5.4 A 57.863 57.863 0 0 1 158.601 4.973 Q 162.05 4.7 166.3 4.7 A 97.745 97.745 0 0 1 171.307 4.832 A 106.541 106.541 0 0 1 171.65 4.85 Q 174.4 5 177 5.25 A 54.247 54.247 0 0 1 178.852 5.459 Q 179.765 5.578 180.571 5.721 A 29.107 29.107 0 0 1 181.5 5.9 Z M 524.8 5.9 L 524.8 9.1 Q 522.8 8.8 520.35 8.55 Q 517.9 8.3 515.35 8.2 Q 512.8 8.1 510.6 8.1 Q 505.756 8.1 502.078 8.406 A 57.751 57.751 0 0 0 499.7 8.65 A 23.82 23.82 0 0 0 496.764 9.194 Q 495.291 9.57 494.086 10.121 A 11.556 11.556 0 0 0 492.65 10.9 A 9.382 9.382 0 0 0 489.591 14.156 A 12.657 12.657 0 0 0 488.7 16.05 Q 487.4 19.5 486.95 25.3 Q 486.644 29.242 486.546 34.57 A 290.622 290.622 0 0 0 486.5 39.9 Q 486.5 48.7 486.95 54.5 Q 487.244 58.291 487.901 61.078 A 21.773 21.773 0 0 0 488.7 63.75 A 11.977 11.977 0 0 0 490.081 66.413 A 9.159 9.159 0 0 0 492.65 68.9 A 12.539 12.539 0 0 0 495.197 70.13 Q 497.156 70.832 499.7 71.15 A 62.348 62.348 0 0 0 503.295 71.485 Q 506.538 71.7 510.6 71.7 A 93.686 93.686 0 0 0 514.95 71.594 A 116.973 116.973 0 0 0 518.15 71.4 A 160.441 160.441 0 0 0 521.04 71.161 Q 522.468 71.029 523.736 70.882 A 86.551 86.551 0 0 0 525.2 70.7 L 525.2 74.1 A 48.422 48.422 0 0 1 523.602 74.311 Q 522.718 74.413 521.727 74.501 A 88.367 88.367 0 0 1 520.5 74.6 Q 517.8 74.8 514.95 74.95 Q 512.1 75.1 509.6 75.1 Q 504.394 75.1 500.389 74.719 A 57.325 57.325 0 0 1 498.05 74.45 A 24.852 24.852 0 0 1 494.741 73.78 Q 493.029 73.302 491.636 72.595 A 12.957 12.957 0 0 1 490.35 71.85 A 11.64 11.64 0 0 1 487.005 68.422 A 15.683 15.683 0 0 1 485.75 66.05 A 22.938 22.938 0 0 1 484.68 62.879 Q 484.242 61.222 483.93 59.261 A 54.481 54.481 0 0 1 483.5 55.8 A 119.771 119.771 0 0 1 483.137 50.623 Q 483.019 48.249 482.959 45.568 A 256.728 256.728 0 0 1 482.9 39.9 A 244.295 244.295 0 0 1 482.983 33.343 Q 483.053 30.744 483.182 28.445 A 113.766 113.766 0 0 1 483.5 24.15 Q 483.915 19.753 484.834 16.555 A 22.139 22.139 0 0 1 485.75 13.95 A 15.264 15.264 0 0 1 487.512 10.841 A 11.731 11.731 0 0 1 490.35 8.1 A 14.453 14.453 0 0 1 493.452 6.532 Q 494.948 5.978 496.727 5.627 A 27.727 27.727 0 0 1 498.05 5.4 A 57.863 57.863 0 0 1 501.901 4.973 Q 505.35 4.7 509.6 4.7 A 97.745 97.745 0 0 1 514.607 4.832 A 106.541 106.541 0 0 1 514.95 4.85 Q 517.7 5 520.3 5.25 A 54.247 54.247 0 0 1 522.152 5.459 Q 523.065 5.578 523.871 5.721 A 29.107 29.107 0 0 1 524.8 5.9 Z M 70.1 74.3 L 66.3 74.3 L 94.7 5.5 L 98.2 5.5 L 126.6 74.3 L 122.7 74.3 L 113.6 52.1 L 79.2 52.1 L 70.1 74.3 Z M 413.4 74.3 L 409.6 74.3 L 438 5.5 L 441.5 5.5 L 469.9 74.3 L 466 74.3 L 456.9 52.1 L 422.5 52.1 L 413.4 74.3 Z M 562.6 74.3 L 559 74.3 L 559 8.9 L 535.7 8.9 L 535.7 5.5 L 585.9 5.5 L 585.9 8.9 L 562.6 8.9 L 562.6 74.3 Z M 621.008 75.01 A 139.801 139.801 0 0 0 626.2 75.1 Q 633.9 75.1 638.95 74.4 A 29.098 29.098 0 0 0 641.095 74.024 Q 642.795 73.657 644.207 73.11 A 13.65 13.65 0 0 0 646.95 71.7 A 10.547 10.547 0 0 0 649.778 68.849 A 13.611 13.611 0 0 0 651.3 65.8 Q 652.219 63.241 652.707 59.648 A 56.972 56.972 0 0 0 653.1 55.6 A 136.203 136.203 0 0 0 653.119 55.294 Q 653.5 49.073 653.5 39.9 A 375.944 375.944 0 0 0 653.46 34.262 Q 653.42 31.598 653.34 29.245 A 172.707 172.707 0 0 0 653.1 24.2 A 59.152 59.152 0 0 0 652.799 20.868 Q 652.558 18.878 652.193 17.188 A 25.218 25.218 0 0 0 651.3 14 A 14.46 14.46 0 0 0 650.386 11.95 A 10.825 10.825 0 0 0 646.95 8.1 A 12.795 12.795 0 0 0 645.156 7.092 Q 643.816 6.47 642.174 6.035 A 27.166 27.166 0 0 0 638.95 5.4 Q 635.715 4.952 631.392 4.79 A 139.801 139.801 0 0 0 626.2 4.7 Q 618.5 4.7 613.45 5.4 A 29.098 29.098 0 0 0 611.305 5.776 Q 609.605 6.143 608.193 6.69 A 13.65 13.65 0 0 0 605.45 8.1 A 10.547 10.547 0 0 0 602.622 10.951 A 13.611 13.611 0 0 0 601.1 14 Q 600.181 16.559 599.693 20.152 A 56.972 56.972 0 0 0 599.3 24.2 A 136.203 136.203 0 0 0 599.281 24.506 Q 598.9 30.727 598.9 39.9 A 375.944 375.944 0 0 0 598.94 45.538 Q 598.98 48.202 599.06 50.555 A 172.707 172.707 0 0 0 599.3 55.6 A 59.152 59.152 0 0 0 599.601 58.932 Q 599.842 60.922 600.207 62.612 A 25.218 25.218 0 0 0 601.1 65.8 A 14.46 14.46 0 0 0 602.014 67.85 A 10.825 10.825 0 0 0 605.45 71.7 A 12.795 12.795 0 0 0 607.244 72.708 Q 608.584 73.33 610.226 73.765 A 27.166 27.166 0 0 0 613.45 74.4 Q 616.685 74.848 621.008 75.01 Z M 821.1 89.3 L 817.8 89.3 Q 820.4 85.8 822.55 82.85 Q 824.7 79.9 826.3 76.6 A 36.055 36.055 0 0 0 827.921 72.647 A 47.287 47.287 0 0 0 829 69.05 Q 830.1 64.8 830.65 58.85 A 115.067 115.067 0 0 0 830.985 54.057 Q 831.119 51.389 831.17 48.362 A 226.351 226.351 0 0 0 831.2 44.6 Q 831.2 38.245 830.878 33.268 A 106.625 106.625 0 0 0 830.65 30.35 A 85.386 85.386 0 0 0 830.112 25.796 Q 829.797 23.649 829.389 21.786 A 44.205 44.205 0 0 0 829 20.15 Q 827.9 15.9 826.3 12.65 Q 824.7 9.4 822.55 6.4 Q 820.4 3.4 817.8 0 L 821.1 0 Q 824.1 3.678 826.304 6.793 A 88.454 88.454 0 0 1 826.45 7 Q 828.7 10.2 830.3 13.6 A 34.237 34.237 0 0 1 832.046 18.162 A 42.145 42.145 0 0 1 832.85 21.2 A 55.75 55.75 0 0 1 833.586 25.153 Q 833.997 27.872 834.25 31.05 A 126.487 126.487 0 0 1 834.524 35.604 Q 834.634 38.141 834.675 41.02 A 250.468 250.468 0 0 1 834.7 44.6 A 236.032 236.032 0 0 1 834.637 50.216 Q 834.571 52.979 834.436 55.407 A 119.718 119.718 0 0 1 834.25 58.2 A 91.597 91.597 0 0 1 833.842 62.264 Q 833.568 64.472 833.202 66.402 A 49.618 49.618 0 0 1 832.85 68.1 A 40.215 40.215 0 0 1 831.493 72.805 A 32.795 32.795 0 0 1 830.3 75.7 Q 828.7 79.1 826.45 82.3 A 104.263 104.263 0 0 1 824.071 85.541 Q 822.784 87.228 821.299 89.056 A 170.495 170.495 0 0 1 821.1 89.3 Z M 636.566 71.384 A 73.279 73.279 0 0 0 637 71.35 A 23.889 23.889 0 0 0 639.755 70.973 Q 642.194 70.484 643.9 69.5 A 8.258 8.258 0 0 0 646.746 66.724 A 11.726 11.726 0 0 0 647.8 64.6 Q 649.087 61.235 649.492 55.373 A 66.175 66.175 0 0 0 649.5 55.25 A 149.273 149.273 0 0 0 649.728 50.752 Q 649.9 46.069 649.9 39.9 Q 649.9 31.491 649.58 25.843 A 123.315 123.315 0 0 0 649.5 24.55 A 54.393 54.393 0 0 0 649.162 21.08 Q 648.711 17.67 647.866 15.376 A 15.462 15.462 0 0 0 647.8 15.2 A 11.479 11.479 0 0 0 646.586 12.834 A 8.176 8.176 0 0 0 643.9 10.3 A 11.918 11.918 0 0 0 641.507 9.271 Q 640.29 8.889 638.84 8.664 A 25.568 25.568 0 0 0 637 8.45 A 91.361 91.361 0 0 0 633.625 8.244 Q 631.995 8.172 630.138 8.136 A 204.12 204.12 0 0 0 626.2 8.1 Q 620.024 8.1 615.834 8.416 A 73.279 73.279 0 0 0 615.4 8.45 A 23.889 23.889 0 0 0 612.645 8.827 Q 610.206 9.316 608.5 10.3 A 8.258 8.258 0 0 0 605.654 13.076 A 11.726 11.726 0 0 0 604.6 15.2 Q 603.313 18.565 602.908 24.427 A 66.175 66.175 0 0 0 602.9 24.55 A 149.273 149.273 0 0 0 602.672 29.048 Q 602.5 33.731 602.5 39.9 Q 602.5 48.309 602.82 53.957 A 123.315 123.315 0 0 0 602.9 55.25 A 54.393 54.393 0 0 0 603.238 58.72 Q 603.689 62.13 604.534 64.424 A 15.462 15.462 0 0 0 604.6 64.6 A 11.479 11.479 0 0 0 605.814 66.966 A 8.176 8.176 0 0 0 608.5 69.5 A 11.918 11.918 0 0 0 610.893 70.529 Q 612.11 70.911 613.56 71.136 A 25.568 25.568 0 0 0 615.4 71.35 A 91.361 91.361 0 0 0 618.775 71.556 Q 620.405 71.628 622.262 71.664 A 204.12 204.12 0 0 0 626.2 71.7 Q 632.376 71.7 636.566 71.384 Z M 292.4 8.9 L 292.4 41.5 L 317.7 41.5 A 41.215 41.215 0 0 0 320.913 41.383 Q 324.091 41.134 326.253 40.354 A 12.308 12.308 0 0 0 326.4 40.3 Q 329.6 39.1 331.1 36.9 A 11.759 11.759 0 0 0 332.759 33.178 A 14.426 14.426 0 0 0 333.05 31.75 Q 333.5 28.8 333.5 25.2 Q 333.5 21.6 333.15 18.65 A 13.976 13.976 0 0 0 332.496 15.727 A 11.289 11.289 0 0 0 331.45 13.5 A 7.76 7.76 0 0 0 329.121 11.116 A 10.903 10.903 0 0 0 327.2 10.1 A 13.136 13.136 0 0 0 324.946 9.417 Q 322.584 8.908 319.304 8.9 A 43.121 43.121 0 0 0 319.2 8.9 L 292.4 8.9 Z M 677.6 8.9 L 677.6 41.5 L 702.9 41.5 A 41.215 41.215 0 0 0 706.113 41.383 Q 709.291 41.134 711.453 40.354 A 12.308 12.308 0 0 0 711.6 40.3 Q 714.8 39.1 716.3 36.9 A 11.759 11.759 0 0 0 717.959 33.178 A 14.426 14.426 0 0 0 718.25 31.75 Q 718.7 28.8 718.7 25.2 Q 718.7 21.6 718.35 18.65 A 13.976 13.976 0 0 0 717.696 15.727 A 11.289 11.289 0 0 0 716.65 13.5 A 7.76 7.76 0 0 0 714.321 11.116 A 10.903 10.903 0 0 0 712.4 10.1 A 13.136 13.136 0 0 0 710.146 9.417 Q 707.784 8.908 704.504 8.9 A 43.121 43.121 0 0 0 704.4 8.9 L 677.6 8.9 Z M 96.2 10.6 L 80.6 48.7 L 112.2 48.7 L 96.7 10.6 L 96.2 10.6 Z M 439.5 10.6 L 423.9 48.7 L 455.5 48.7 L 440 10.6 L 439.5 10.6 Z M 787 29.8 L 782.2 29.8 L 782.2 23.3 L 787 23.3 L 787 29.8 Z M 787 74.3 L 782.2 74.3 L 782.2 67.8 L 787 67.8 L 787 74.3 Z"/>
        </svg>
      </Anime>
    </div>
  )
}

export default SvgMorphing;