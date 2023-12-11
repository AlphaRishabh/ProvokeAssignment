import React from 'react';
import YouTube from 'react-youtube';

const Vp = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default Vp;
