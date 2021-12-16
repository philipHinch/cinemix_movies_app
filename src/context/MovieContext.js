import { createContext, useReducer } from "react";
import movieReducer from "./MovieReducer";

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const initialState = {
        movies: [],
        isLoading: false,
        isNowPlaying: true
    }

    const [state, dispatch] = useReducer(movieReducer, initialState)

    //get now playing movies
    const getNowPlaying = async () => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&page=1`)
            const data = await response.json()

            dispatch({
                type: 'GET_NOW_PLAYING',
                payload: data.results
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //https://api.themoviedb.org/3/search/movie?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&page=1&include_adult=false&query={e.target.value}
    //get search movies
    const getSearchMovies = async (value) => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&page=1&include_adult=false&query=${ value }`)
            const data = await response.json()

            console.log(data.results);
            dispatch({
                type: 'GET_SEARCH_MOVIES',
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
            getNowPlaying,
            getSearchMovies
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext