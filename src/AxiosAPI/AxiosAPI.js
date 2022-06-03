import axios from "axios";


const fetcher = axios.create({
    baseURL: " https://mighty-tor-21117.herokuapp.com",
});

export default fetcher;
