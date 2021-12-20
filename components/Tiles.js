import React, { useState } from "react";
import Tile from "./Tile";

const Tiles = ({ movies, tileData, setting,handleClick,tiles}) => {

  return (
    <div className={`w-full md:w-5/6 grid grid-cols-3 md:grid-cols-${tiles/3} md:grid-rows-3 gap-4 p-8 h-full`}  id="memory">
      {tileData.map((tile, i) => {
        let content = tile.partition === 0 ? setting.catA : setting.catB;
        let isImage = content === "poster_path" ? true : false;
        let movie_index = tile["index"];
        let movie = content === "release_date" ?  movies.results[movie_index][`${content}`].substring(0,4)
                                               :  movies.results[movie_index][`${content}`]
                                               
        return (
          <Tile
            key={100 + i}
            onclick={() => handleClick(i)}
            isFlipped={tile.flipped}
            isImage={isImage}
            movie={movie}
          />
        );
      })}
    </div>
  );
};

export default Tiles;
