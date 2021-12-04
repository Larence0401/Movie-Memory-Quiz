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

const [tileData, setTileData] = useState([])

useEffect(() => startGame(), [])
 
  const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
                      setSetting(prevState => ({...prevState, [name] : value}))
  }
  
  const startGame = async () => {
    //resetGame()
    const randomizedSample = randomizeSample((setting['tiles']/2),20)
    setTileData(randomizedSample)
    console.log(randomizedSample)
    const result = await getData()
    console.log(result)
    setMovieData(result)


  }

  return <Wrapper>
              <Header/>
              <Container>
                <Menu handleSelect={e => handleChange(e)} startGame={startGame}/>
                <Tiles movies={movies} tileData={tileData.length === 0 ? tile_data : tileData} setting={setting}/>
              </Container>
              <Footer/>
          </Wrapper>
     
}

export const getStaticProps = async () => {

  const data = await getData()
  const tile_data = await randomizeSample()


  return {
    props: {
      movies: data

    }
  }
}
