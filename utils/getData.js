import React from 'react'

const getData = async () => {
    const randomPage = Math.ceil(Math.random()*10)
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en&id=19404-US&page=${randomPage}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default getData
