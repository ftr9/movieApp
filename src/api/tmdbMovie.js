import axios from 'axios';

export const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: /*'replace your own api key here'*/,
    }
})

