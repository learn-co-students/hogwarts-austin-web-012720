import React from "react";
import HogCard from "./HogCard";

function HogTiles(props) {
  return (
    <div className="ui grid container">
      {props.hogs.map((hog, idx) => (
        <HogCard key={idx} hog={{ ...hog }} />
      ))}
    </div>
  );
}

export default HogTiles;
