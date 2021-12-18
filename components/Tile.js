import React, {useState,useEffect} from 'react'

const Tile = ({movie,onclick,isFlipped,isImage}) => {
  
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    let opacity = isFlipped ? "100" : "50"
    let isTitle = !Number.isInteger(parseInt(movie.substring(0,4)))
    let textformat = isTitle ? "title" : "year"

    return (
        <div className={`tile h-128
                         text-center relative bg-gray-200 object-fill overflow-hidden rounded-lg tile opacity-${opacity}
                         `}
            onClick={onclick}>
              {isFlipped ? isImage ? <img className="opacity-100" src={`${BASE_URL}${movie}`}></img> : 
                        <span className={textformat}>{movie}</span> : null}
           
        </div>
    )
}

export default Tile 
