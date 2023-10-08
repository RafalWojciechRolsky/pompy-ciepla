/* eslint-disable @next/next/no-img-element */
'use client';

import { FC, useState } from 'react';
// import YouTube, { YouTubeProps } from 'react-youtube';
import ReactPlayer from 'react-player';

interface IPropsTypes {
  name?: string;
}

const Movies: FC<IPropsTypes> = (props) => {
  const [play, setPlay] = useState(false);
  // const onPlayerReady: YouTubeProps['onReady'] = (event) => {
  //   event.target.pauseVideo();
  // };

  // const opts: YouTubeProps['opts'] = {
  //   // height: '500',
  //   // width: '889',
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };

  return (
    <div className="movies">
      <div className="movies__container">
        <h2>Filmy o pompach</h2>
        <p>
          Czasem najlepiej jest zamiast poczytać zobaczyć o co chodzi bo jeden obraz jest wart
          tysiąca słów. Polecamy zobaczyć filmy kompetentnie traktujące o tym czym są pompy ciepła i
          jakie są ich niewątpliwe zalety.
        </p>
        <div className="videoContainer">
          {/* <YouTube videoId="chiXIU5FjlE" opts={opts} onReady={onPlayerReady} />; */}
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div onClick={() => setPlay(true)}>
            {play ? (
              <ReactPlayer url="https://www.youtube.com/watch?v=oDAknaJ9Kpo" playing />
            ) : (
              <img
                src="https://img.youtube.com/vi/oDAknaJ9Kpo/maxresdefault.jpg"
                alt="Video thumbnail"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
