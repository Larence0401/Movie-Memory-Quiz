import React, {useState, Component} from 'react'
import Select from 'react-select'

const Menu = ({handleSelect, startGame}) => {

    const [tiles, setTiles] = useState("12")
    const [categoryA, setCategoryA] = useState("movie_poster")
    const [categoryB, setCategoryB] = useState("movie_poster")



    return (
        <div className="w-full max-w-xs h-full bg-indigo-400 flex flex-col py-2">
            <select name="tiles" id="tiles" className="p-2 mx-4 my-2" onChange={handleSelect}>
                <option disabled selected value="">Number of tiles</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
            </select>
            <select name="catA" id="catA" className="p-2 mx-4 my-2" onChange={handleSelect}>
                <option disabled selected  value="">Category A</option>
                <option value="poster_path">movie poster</option>
                <option value="title">title</option>
                <option value="release_date">year of release</option>
            </select>
            <select name="catB" id="catB" className="p-2 mx-4 my-2" onChange={handleSelect}>
                <option disabled selected  value="">Category B</option>
                <option value="poster_path">movie poster</option>
                <option value="title">title</option>
                <option value="release_date">year of release</option>
            </select>
            
            <button type="button" className="bg-orange-600 mt-2 mx-4 border-2 font-white" onClick={startGame}>Start game</button>

        </div>
    )
}

export default Menu
