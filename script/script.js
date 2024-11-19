import { oddsOrEven } from "./functions.js";

// get elements by index.html

const container = document.querySelector(".container");
console.log(container);


const baseUrl = "https://jsonplaceholder.typicode.com/";

const resourcePhotos = "photos";
const resourceP = ""

const params = { "_limit": 6 };


axios.get(baseUrl + resourcePhotos, { params })
    .then((res) => {
        console.log(res.data);
    })




























































