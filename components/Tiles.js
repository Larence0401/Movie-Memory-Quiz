import React, { useState } from "react";
import Tile from "./Tile";
import randomizeSample from "../utils/RandomizeSample";

const Tiles = /*async */ ({ movies, tileData, setting,handleClick,clickedTiles,tiles}) => {
  console.log(tileData)

  return (
    <div className={`w-5/6 grid grid-cols-3 md:grid-cols-${tiles/3} grid-rows-3 gap-4 p-8 h-full`}  id="memory">
      {tileData.map((tile, i) => {
        let content = tile.partition === 0 ? setting.catA : setting.catB;
        let isImage = content === "poster_path" ? true : false;
        let isTitle = content === "title" ? true : false;
        
        console.log(isImage)
        let movie_index = tile["index"];
        let movie = content === "release_date" ?  movies.results[movie_index][`${content}`].substring(0,4)
                                               :  movies.results[movie_index][`${content}`]
                                               
                                               
 
        //console.log(movies.results[movie_index])
        //console.log(movies.results[movie_index][`${content}`])

        return (
          <Tile
            key={100 + i}
            onclick={() => handleClick(i)/*handleClicks(movie_index, i)*/}
            isFlipped={tile.flipped}
            isImage={isImage}
            content={content}
            movie={movie}
            clickedTiles={clickedTiles}
 
          />
        );
      })}
    </div>
  );
};

export default Tiles;
