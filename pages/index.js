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
console.log("type of tile data: " + typeof tile_data)
 // useEffect(() => setArray(getMovieIndexArray(6,12),[]))
 const [setting,setSetting] = useState({
                                          "tiles" : "12",
                                          "catA" : "poster_path",
                                          "catB" : "poster_path"
                                        })

const [tileData, setTileData] = useState(tile_data)

useEffect(() => startGame(), [])
 
  const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
                      setSetting(prevState => ({...prevState, [name] : value}))
  }

  const handleClick = i => {
        const flipped = Object.keys(tileData[i])[2]
        console.log(flipped)
        console.log(tileData.map(tile => console.log("tile")))
        //setTileData(prevState => ({...prevState, [flipped] : true}))
       //tileData.map(tile => setTileData({...tile, ['isFlipped'] : true}))
       let newArr = [...tileData]
         newArr[i]['flipped'] = true
         setTileData(newArr)
       console.log(tileData[i]['flipped'])
       console.log("handleClick" + i)
       console.log(tileData[i])
  }
  
  const startGame = async () => {
    //resetGame()
    console.log(tileData)
    const randomizedSample = randomizeSample((setting['tiles']/2),19)
    setTileData(randomizedSample)
    //console.log(randomizedSample)
    const result = await getData()
    //console.log(result)
    setMovieData(result)


  }

  return <Wrapper>
              <Header/>
              <Container>
                <Menu handleSelect={e => handleChange(e)} startGame={startGame}/>
                <Tiles id="tiles" 
                       handleClick={i => handleClick(i)/*console.log("click in Home component" + i)*/}
                       movies={movies} 
                       tileData={tileData.length === 0 ? tile_data : tileData} 
                       setting={setting}/>
              </Container>
              <Footer/>
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
