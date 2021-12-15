const movieReducer = (state, action) => {
    switch (action.type) {
        case 'GET_LATEST_MOVIES':
            return {
                ...state,
                movies: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default movieReducer