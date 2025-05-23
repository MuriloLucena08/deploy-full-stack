//pode usar a biblioteca Axios ou Fetch
import axios from "axios";

// const {NODE_ENV} = process.env;
// const URL = localhost:3000/api";

const URL = "https://deploy-full-stack-tyj4.onrender.com/api";


const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseSongs.data);