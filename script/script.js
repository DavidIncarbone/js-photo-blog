import { oddsOrEven } from "./functions.js";

const baseUrl = "https://jsonplaceholder.typicode.com/";
const resourcePhotos = "photos";

const params = { "_limit": 6 };


axios.get(baseUrl + resourcePhotos, { params }).then((res) => {
    console.log(res.data);
})




























































