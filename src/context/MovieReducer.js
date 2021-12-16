const movieReducer = (state, action) => {
    switch (action.type) {
        case 'GET_NOW_PLAYING':
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                isMoviesActive: true,
                isNowPlaying: true,
                isTopMovies: false,
                isComingSoon: false
            }
        case 'GET_SEARCH_MOVIES':
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                isMoviesActive: true,
                isNowPlaying: false,
                isTopMovies: false,
                isComingSoon: false
            }
        case 'GET_TOP_MOVIES':
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                isMoviesActive: true,
                isNowPlaying: false,
                isTopMovies: true,
                isComingSoon: false
            }
        case 'GET_COMING_SOON_MOVIES':
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                isMoviesActive: true,
                isNowPlaying: false,
                isTopMovies: false,
                isComingSoon: true
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

export default movieReducer