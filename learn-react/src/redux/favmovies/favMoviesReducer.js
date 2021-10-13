import { FAVORITE_MOVIES } from "./favMoviesType";

const initialState = {
    favoritemovie: []
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITE_MOVIES:
            return {
                ...state,
                favoritemovie: [...state.favoritemovie, action.payload]
            }


        default: return state;
    }

}
export default movieReducer;