import React from 'react';

import Gif from './gif';

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => (
        <button
          key={id}
          type="button"
          onClick={() => selectGif(id)}
        >
          <Gif id={id} />
        </button>
      ))}
    </div>
  );
};

export default GifList;
