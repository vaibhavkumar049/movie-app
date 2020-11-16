import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=29e521c80dba636ea58bfc8d83baad6f&language=en-US&page=1",
    headers: {
        "Content-type": "application/json"
    }
});