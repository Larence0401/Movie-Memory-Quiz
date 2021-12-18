import React from 'react'

const getData = async () => {
    const randomPage = Math.ceil(Math.random()*10)
    console.log(randomPage)
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d8beb6430bedd50e927c4d7239623c53&language=en&id=19404-US&page=${randomPage}`)
    const data = await res.json()
    return data
}

export default getData
