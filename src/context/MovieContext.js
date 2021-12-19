import { createContext, useReducer, useState } from "react";
import movieReducer from "./MovieReducer";

const MovieContext = createContext()

const APIKEY = '5d07786947a87a52654a8ebdaa43a2d0'

export const MovieProvider = ({ children }) => {

    const [totalResults, setTotalResults] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const initialState = {
        movies: [],
        isLoading: false,
        isNowPlaying: true,
        currentPage: 1,
    }

    const [state, dispatch] = useReducer(movieReducer, initialState)

    //get now playing movies
    const getNowPlaying = async () => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ APIKEY }&language=en-US&page=1`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)


            dispatch({
                type: 'GET_NOW_PLAYING',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //get search movies
    const getSearchMovies = async (value) => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ APIKEY }&language=en-US&page=1&include_adult=false&query=${ value }`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)



            dispatch({
                type: 'GET_SEARCH_MOVIES',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //get top movies
    const getTopMovies = async () => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ APIKEY }&language=en-US&page=1`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)



            dispatch({
                type: 'GET_TOP_MOVIES',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //get coming soon movies
    const getComingSoonMovies = async () => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ APIKEY }&language=en-US&page=1`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)



            dispatch({
                type: 'GET_COMING_SOON_MOVIES',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    ////----   NEXT PAGE FUNCTIONS   ----////

    //get next page now playing
    const getNextPageNow = async (pageNumber) => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ APIKEY }&language=en-US&page=${ pageNumber }`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)


            dispatch({
                type: 'GET_NEXT_PAGE_NOW',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //get next page search
    const getNextPageSearch = async (value, pageNumber) => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ APIKEY }&language=en-US&page=${ pageNumber }&include_adult=false&query=${ value }`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)


            dispatch({
                type: 'GET_NEXT_PAGE_SEARCH',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //get next page top
    const getNextPageTop = async (pageNumber) => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ APIKEY }&language=en-US&page=${ pageNumber }`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)


            dispatch({
                type: 'GET_NEXT_PAGE_TOP',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //get next page upcoming
    const getNextPageUpcoming = async (pageNumber) => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ APIKEY }&language=en-US&page=${ pageNumber }`)
            const data = await response.json()
            setTotalResults(data.total_results)
            setCurrentPage(data.page)


            dispatch({
                type: 'GET_NEXT_PAGE_UPCOMING',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }


    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return (
        <MovieContext.Provider value={{
            movies: state.movies,
            isLoading: state.isLoading,
            isMoviesActive: state.isMoviesActive,
            isNowPlaying: state.isNowPlaying,
            isTopMovies: state.isTopMovies,
            isComingSoon: state.isComingSoon,
            currentPage: currentPage,
            totalResults: totalResults,
            getNowPlaying,
            getSearchMovies,
            getTopMovies,
            getComingSoonMovies,
            getNextPageNow,
            getNextPageSearch,
            getNextPageTop,
            getNextPageUpcoming
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext