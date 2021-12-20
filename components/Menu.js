import React, {useState, Component} from 'react'
import ClickCounter from './ClickCounter'
import {FontAwesomeIcon} from "@fortawesome/fontawesome-free"
import {faCoffee} from "@fortawesome/fontawesome-free"


const Menu = ({handleSelect, startGame,clicks}) => {

    const [tiles, setTiles] = useState("12")
    const [categoryA, setCategoryA] = useState("movie_poster")
    const [categoryB, setCategoryB] = useState("movie_poster")

    const handleClick = () => {
        const menu = document.getElementById('menu')   
        menu.style.display === "flex" ? menu.style.display = "none" : menu.style.display = "flex"
     }

    return (
        <>
        <span id="menu-icon" className='text-white text-6xl mr-8 mt-8 flex self-end mr-4 md:hidden' onClick={handleClick}>
            <i className='fa fa-bars'></i>
        </span>
        <div className="w-full md:max-w-xs h-full flex self-end md:self-center bg-black-500 flex-col px-12 md:px-4 py-8" id="menu">
            <label htmlFor="tiles" className="text-gray-300 italic ml-4 text-xl">Playing with ...</label>
            <select name="tiles" id="tiles" className="p-1 mx-4 mb-8 mt-2 text-xl md:text-lg font-semibold" onChange={handleSelect}>
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
            <ClickCounter clicks={clicks}/>
        </div>
        </>
    )
}

export default Menu
