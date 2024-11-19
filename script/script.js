import { oddsOrEven } from "./functions.js";

// get elements by index.html

const container = document.querySelector(".container");
console.log(container);


const baseUrl = "https://jsonplaceholder.typicode.com/";

const resourcePhotos = "photos";

const completeUrl = baseUrl + resourcePhotos;

const params = { "_limit": 6 };


axios.get(baseUrl + resourcePhotos, { params })
    .then((photos) => {
        const cards = photos.data;
        console.log(cards);
        const images = [];
        let template = "";
        for (let photo of cards) {

            const images = photo.url;
            console.log(images);

            const title = photo.title;
            console.log(title);

            template += `
                <div class="card">
                <div class="pin">
                    <img src="./img/pin.svg" alt="pin">
                </div>
                <div class="img-container">
                    <img src="${images}" alt="${title}">
                </div>
                <div class="text-container">
                    <p>${title}</p>
                </div>
                </div>`
        }
        container.innerHTML = template;
    })
    .catch((error) => {
        console.log(error);
    })




























































