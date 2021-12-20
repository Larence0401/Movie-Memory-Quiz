import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getData from '../utils/getData'
import randomizeSample from '../utils/RandomizeSample'
import Tiles from '../components/Tiles'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Menu from '../components/Menu'
import playSound from '../utils/playSound'
import showModal from '../utils/showModal'
import { useEffect, useState } from 'react'



export default function Home({movies,tile_data}) {
const  [movieData,setMovieData] = useState([])
const [clicks,setClicks] = useState(0)
const [setting,setSetting] = useState({
                                          "tiles" : "12",
                                          "catA" : "poster_path",
                                          "catB" : "poster_path"
                                        })
const [tileData, setTileData] = useState(tile_data)
const[clickedTiles, setClickedTiles] = useState([])

useEffect(() => startGame(), [])
useEffect(() => handleFlipState(),[tileData])
 
  const handleChange = e => { 
        const name = e.target.name
        const value = e.target.value
                      setSetting(prevState => ({...prevState, [name] : value}))
  }

  const handleClick = i => {
        if(tileData[i]['flipped']){return}
        let newArr = [...tileData]
        newArr[i]['flipped'] = true
        setTileData(newArr)
        setClickedTiles(prevState => [...prevState,i])
        setClicks(prevState => prevState + 1)
        playSound('click.wav')
  }

  const startGameOnClick = () => {
        startGame()
        showModal("Game started!")
  }

  const closeMobileMenu = () => {
    const menu = document.getElementById('menu')
    window.innerWidth <= 768 ? menu.style.display = "none" : null
  }

  const startGame = async () => {
    const randomizedSample = randomizeSample((setting['tiles']/2),19)
    setTileData(randomizedSample)
    const result = await getData()
    setMovieData(result)
    setClicks(0)
    closeMobileMenu()
  }


  const checkIfSolved = array => { 
    const arr = array.filter(el => el['flipped'] === true)
    if(arr.length === parseInt(setting['tiles'])) {
      showModal("You won!")
      playSound('win.mp3')
      startGame()
    }
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

  let tiles = tileData.length
  return    <>
            <Head>
                  <title>Memory Quiz</title>
                  {<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />}
            </Head>
            <Wrapper>
              <Container>
                <Menu handleSelect={e => handleChange(e)} 
                startGame={startGameOnClick}
                clicks={clicks}/>
                <Tiles 
                       handleClick={i => handleClick(i)}
                       movies={movies} 
                       tiles={tiles}
                       tileData={tileData.length === 0 ? tile_data : tileData} 
                       clickedTiles={clickedTiles}
                       setting={setting}/>
              </Container>
            </Wrapper>    
            </>
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
