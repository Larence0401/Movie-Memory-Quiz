import React, {useState} from 'react'

const Tile = ({movie,onclick,isFlipped,isSolved,isImage}) => {
    /*
    console.log(isFlipped)
    console.log(isSolved)
    console.log(isImage)
    console.log(movie)
    */
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
   /* const handleClick = () => {
        onclick()
    } */
    // isFlipped ? !isImage ? movie : <img src={`${BASE_URL}${movie}`}>
    
//{isFlipped && <img className="object-fill w-full h-full" src={`${BASE_URL}${movie}`}/>}     
    return (
        <div className="h-48 text-center bg-red overflow-hidden rounded-lg tile"
            onClick={onclick}>
              {isFlipped ? !isImage ? movie : <img src={`${BASE_URL}${movie}`}></img> : "back"}
        </div>
    )
}

export default Tile 
