'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import YoutubePlayButton from '../../../public/images/YouTube_play_button_icon.svg';
import YouTube, { YouTubeProps } from 'react-youtube';

interface IPropsTypes {
  name?: string;
}

const MovieHaier: FC<IPropsTypes> = (props) => {
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
        <h3>Filmy o pompach ciepła firmy Haier</h3>
        <div className="videoContainer">
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div onClick={() => setPlay(true)}>
            {play ? (
              <YouTube videoId="qkJsjZmW8cM" opts={opts} onReady={onPlayerReady} />
            ) : (
              <>
                <div className="play">
                  <Image src={YoutubePlayButton} height={50} width={70} alt="Youtube play button" />
                </div>
                <Image src="/images/Image-haierCover.jpg" alt="Video thumbnail" fill={true} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHaier;
