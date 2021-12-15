const movieReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LATEST_MOVIES':
            return {
                ...state,
                movies: action.payload,
                isLoading: false,
                isMoviesActive: true
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