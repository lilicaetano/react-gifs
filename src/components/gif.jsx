import React from "react";

function Gif({ id }) {
  return (
    <img
      className="gif"
      alt=""
      src={`https://media.giphy.com/media/${id}/giphy.gif`}
    />
  );
}
export default Gif;
