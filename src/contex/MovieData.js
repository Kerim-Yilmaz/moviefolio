
import React from 'react'
import { useState, useEffect, createContext } from 'react';
export const MovieData = createContext();



const MovieDataProvider = (props) => {
    const [pagee, setPage] = useState(1);
    const [get, setGet] = useState('popular');
    const [isloading, setLoading] = useState(true)
    const [genresloading, setgenresLoading] = useState(true)
    const basicurl = 'https://api.themoviedb.org/3/movie';
    const apikey = 'api_key=29e5a5faad461c987d2ffdd865e67920';
    const language = 'language=en-US';
    const pages = 'page=';
    const [genres, setGenres] = useState([])
    const [moviedb, setMoviedb] = useState([])
    const [moviedetails, setMoviedetails] = useState([])
    //const [url,setUrl]=useState (`${basicurl}/${get}?${apikey}&${language}&${pages}${pagee}`)
    useEffect(() => {
        setLoading(true)
        const fetchPopular = async () => {

            const response = await fetch(`${basicurl}/${get}?${apikey}&${language}&${pages}${pagee}`)
            const moviedb = await response.json()

            setMoviedb(moviedb)
            setLoading(false)
        }
        fetchPopular()

    }, [get, pagee])
    const topRated = () => {
        setGet('top_rated')
        setPage(1)
        console.log('settt')
    }
    const popular = () => {
        setGet('popular')
        setPage(1)
        console.log('home')
    }
    const page = (page) => { setPage(page) }



    useEffect(() => {

        const fetchGenres = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${apikey}&${language}`)
            const genres = await response.json()
            const genress = genres.genres
            setGenres(genress)
            setgenresLoading(false)
        }
        fetchGenres()
    }, [])
   const  movieDetails = (id) => {
    console.log('geldi',{id})
    setLoading(true)
       
    const fetchMovieDetails = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?${apikey}&${language}`)
            const details = await response.json()
            setMoviedetails(details)
            setLoading(false)
        }
        fetchMovieDetails()
    }
    const searchMovie = (query)=>{
        setLoading(true)
        const fetchGenres = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/search/movie?${apikey}&${language}&query=${query}&page=${pagee}`)
            const genres = await response.json()
           
            setMoviedb(genres)
            setLoading(false)
        }
        fetchGenres()
    }

return (
    <>
        <MovieData.Provider value={{ movieDetails,moviedetails,searchMovie,moviedb, topRated, popular, isloading, page, genres, genresloading }}>
            {props.children}
        </MovieData.Provider>
    </>
)
}


export default MovieDataProvider;