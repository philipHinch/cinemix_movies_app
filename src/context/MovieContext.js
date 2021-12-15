import { createContext, useReducer } from "react";
import movieReducer from "./MovieReducer";

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const initialState = {
        movies: [],
        isLoading: false,
    }



    const [state, dispatch] = useReducer(movieReducer, initialState)

    const getNowPlaying = async () => {
        setLoading()
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&page=1`)
            const data = await response.json()

            dispatch({
                type: 'GET_LATEST_MOVIES',
                payload: data.results
            })
        } catch (err) {
            console.log(err);
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
            getNowPlaying
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext