import React, {useState, Component} from 'react'
import Select from 'react-select'

const Menu = ({handleSelect, startGame}) => {

    const [tiles, setTiles] = useState("12")
    const [categoryA, setCategoryA] = useState("movie_poster")
    const [categoryB, setCategoryB] = useState("movie_poster")



    return (
        <div className="w-full max-w-xs h-full bg-black-500 flex flex-col px-4 py-8">
            <label htmlFor="tiles" className="text-gray-300 italic ml-4 text-xl">Playing with ...</label>
            <select name="tiles" id="tiles" className="p-1 mx-4 mb-8 mt-2 text-lg font-semibold leading-6" onChange={handleSelect}>
                <option value="12">12 tiles</option>
                <option value="18">18 tiles</option>
            </select>
            <label htmlFor="tiles" className="text-gray-300 italic mx-4 text-xl">Category A:</label>
            <select name="catA" id="catA" className="p-1 mx-4 mt-2 mb-8 text-lg font-semibold text-slate-900" onChange={handleSelect}>
                <option value="poster_path">movie poster</option>
                <option value="title">movie title</option>
                <option value="release_date">year of release</option>
            </select>
            <label htmlFor="tiles" className="text-gray-300 italic mx-4 text-xl">Category B:</label>
            <select name="catB" id="catB" className="p-1 mx-4 mt-2  mb-8 text-lg font-semibold text-slate-900" onChange={handleSelect}>
                <option value="poster_path">movie poster</option>
                <option value="title">movie title</option>
                <option value="release_date">year of release</option>
            </select>
            
            <button type="button" className="bg-green-700 hover:bg-green-600 text-2xl tracking-wider uppercase font-bold py-4 mt-12 mx-4 text-white" onClick={startGame}>Start game</button>

        </div>
    )
}

export default Menu
