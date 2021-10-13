import { FAVORITE_MOVIES } from "./favMoviesType";

export const favoritemovies = (movie) => {
    return {
        type: FAVORITE_MOVIES,
        payload: movie
    }
}

