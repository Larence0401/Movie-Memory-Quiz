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
 // useEffect(() => setArray(getMovieIndexArray(6,12),[]))
 const [setting,setSetting] = useState({
                                          "tiles" : "12",
                                          "catA" : "poster_path",
                                          "catB" : "poster_path"
                                        })

const [tileData, setTileData] = useState(tile_data)

const[clickedTiles, setClickedTiles] = useState([])

useEffect(() => startGame(), [])

useEffect(() => {
  //setClickedTiles(prevState => [...prevState,i])
  console.log(clickedTiles)
  handleFlipState()
  
      } ,[tileData])
 
  const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
                      setSetting(prevState => ({...prevState, [name] : value}))
  }

  const handleClick = i => {
        let newArr = [...tileData]
        newArr[i]['flipped'] = true
        setTileData(newArr)
        setClickedTiles(prevState => [...prevState,i])
        //handleFlipState(i)
  }
  
  const startGame = async () => {
    //resetGame()
    //console.log(tileData)
    const randomizedSample = randomizeSample((setting['tiles']/2),19)
    setTileData(randomizedSample)
    //console.log(randomizedSample)
    const result = await getData()
    //console.log(result)
    setMovieData(result)
  }

  const handleFlipState = () => {

    let newArr = [...tileData]
    //let flipped = newArr.filter((el,index) => el['flipped'] === true)
    if(clickedTiles.length === 2) {
        let index1 = clickedTiles[0]
        let index2 = clickedTiles[1]
       // console.log("1st movie index: " + flipped[0]['index'])
       // console.log("2nd movie index: " + flipped[1]['index'])
     // if(flipped[0]['index'] === flipped[1]['index']) {
      if(newArr[index1]['index'] === newArr[index2]['index']) {
        console.log("equal")
        //checkifSolved()
      } else {
        //flipping back tiles    
        console.log("not equal")    
        newArr[index1]['flipped'] = false
        newArr[index2]['flipped'] = false
        
        setTileData(newArr)
      }
      console.log("movie index 1: " + newArr[index1]['index'])
        console.log("movie index 2: " + newArr[index2]['index'])
      console.log("index 1: " + clickedTiles[0])
      console.log("index 2: " + clickedTiles[1])
      //console.log(newArr[index1]['index'])
      //console.log(newArr[index2]['index'])
      setClickedTiles([])
    }
    
    //console.log("flipped_arrb: " + newArr[0]['index'])
    //filter tileData if 2 tiles are flipped =>
            // check if 'index value' of both tiles is equal
                    //if equal check if all tiles solved
                    // if not equal set 'flipped state' to false
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
