import React, {useState} from 'react'
import Tile from './Tile'
import randomizeSample from '../utils/RandomizeSample'


const Tiles = async ({movies,tileData,setting}) => {
             
          return (
        <div className="max-w-4xl w-5/6 grid grid-cols-3 md:grid-cols-4 md:mr-4 gap-4 bg-red-900 px-4 py-8">
            {tileData.map((tile,i) => {
                let content = tile.fraction === 0 ? setting.catA : setting.catB
                let isImage = content === "poster_path" ? true : false

                        return (
                            <Tile key={100 + i} onclick={() =>  handleClicks(movie_index,i)} 
                                    isFlipped={tile.flipped}
                                    isSolved={tile.solved}
                                    isImage={isImage}
                                    movie="movie_dammy"/>)})}  
            
                        </div>
                    
    )
}

export default Tiles
