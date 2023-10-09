'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface IPropsTypes {
  name?: string;
}

const Movies: FC<IPropsTypes> = (props) => {
  const [play, setPlay] = useState(false);
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    // height: '500',
    // width: '889',
    playerVars: {
      autoplay: 0,
    },
  };

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
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div onClick={() => setPlay(true)}>
            {play ? (
              <YouTube videoId="chiXIU5FjlE" opts={opts} onReady={onPlayerReady} />
            ) : (
              <>
                <div className="btn play">PLAY</div>
                <Image src="/images/Image-400.jpg" alt="Video thumbnail" fill={true} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
