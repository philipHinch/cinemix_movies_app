import { createContext, useReducer } from "react";
import movieReducer from "./MovieReducer";

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {

    const initialState = {
        movies: [],
        isLoading: false
    }





    return (
        <MovieContext.Provider value={{

        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext