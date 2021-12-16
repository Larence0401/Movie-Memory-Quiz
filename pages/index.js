import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import getData from '../utils/getData'
import randomizeSample from '../utils/RandomizeSample'
import Tiles from '../components/tiles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Menu from '../components/Menu'


import { useEffect, useState } from 'react'




export default function Home({movies,tile_data}) {
const  [movieData,setMovieData] = useState([])
 const [setting,setSetting] = useState({
                                          "tiles" : "12",
                                          "catA" : "poster_path",
                                          "catB" : "poster_path"
                                        })

const [tileData, setTileData] = useState(tile_data)

const[clickedTiles, setClickedTiles] = useState([])

const [flashed, setFlashed] = useState(true)

useEffect(() => startGame(), [])

useEffect(() => handleFlipState(),[tileData])
 
  const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
                      setSetting(prevState => ({...prevState, [name] : value}))
  }

  const handleClick = i => {
        if(clickedTiles.includes(i) || tileData[i]['flipped'] === true){return}
        let newArr = [...tileData]
        newArr[i]['flipped'] = true
        setTileData(newArr)
        setClickedTiles(prevState => [...prevState,i])
  }

  const startGameOnClick = () => {
        startGame()
        showModal("Game started!")
  }
/*
  const showStartModal = () => {
    alert("started")
    const container = document.getElementById("container")
    let modal = document.createElement("div")
      modal.classList.add("modal")
      modal.textContent = "Game started!"
      container.appendChild(modal)
  }
*/

  const startGame = async () => {
    setFlashed(true)
    const randomizedSample = randomizeSample((setting['tiles']/2),19)
    setTileData(randomizedSample)
    const result = await getData()
    setMovieData(result)
  }

  const checkIfSolved = newArr => {
      const arr = newArr.filter(el => el['flipped'] === true)
      console.log("flipped array length: " + arr)
      if(arr.length === parseInt(setting['tiles'])) {
        setFlashed(false)
        showModal("You won!")
        startGame()
      }
  }

  const showModal = message => {
      const container = document.getElementById("container")
      let modalBG = document.createElement("div")
      modalBG.classList.add("modalBG")
      container.appendChild(modalBG)
      let modal = document.createElement("div")
      modal.classList.add("modal")
      modal.textContent = message
      container.appendChild(modal)
      removeModal(modalBG,modal)
  }


  const removeModal = (...args) => {
      setTimeout(() => {
          args.map(arg => container.removeChild(arg))
      },3000)
      
  }

  const handleFlipState = () => {
    let newArr = [...tileData]
    if(clickedTiles.length === 2) {
      checkIfSolved(newArr)
    }
    else if(clickedTiles.length === 3) {
        let index1 = clickedTiles[0]
        let index2 = clickedTiles[1]
      if(newArr[index1]['index'] === newArr[index2]['index']) {
        
      } else {    
        newArr[index1]['flipped'] = false
        newArr[index2]['flipped'] = false     
        setTileData(newArr)
      }
      setClickedTiles(prevState => [prevState[2]])
      
    }
  }
  console.log(setting)
  let tiles = tileData.length
  return <Wrapper>
              <Container>
                <Menu handleSelect={e => handleChange(e)} startGame={startGameOnClick}/>
                <Tiles 
                       handleClick={i => handleClick(i)}
                       flashed={flashed}
                       movies={movies} 
                       tiles={tiles}
                       tileData={tileData.length === 0 ? tile_data : tileData} 
                       clickedTiles={clickedTiles}
                       setting={setting}/>
              </Container>
          </Wrapper>
     
}

export const getStaticProps = async () => {

  const data = await getData()
  const tile_data = await randomizeSample()


  return {
    props: {
      movies: data,
      tile_data: tile_data

    }
  }
}
