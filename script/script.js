import { oddsOrEven } from "./functions.js";

// asset API
const baseUrl = "https://jsonplaceholder.typicode.com/";
const resourcePhotos = "photos";
const completeUrl = baseUrl + resourcePhotos;
const params = { "_limit": 6 };

// get elements by index.html

const container = document.querySelector(".container");
console.log(container);
const main = document.querySelector("main");
console.log(main);
const button = document.querySelector("button");
console.log(button);
const giantCard = document.querySelector(".giantCard");
console.log(giantCard);
const overlayContainer = document.querySelector(".overlay-container");
console.log(overlayContainer);
const spinner = document.getElementById("spinner");
console.log(spinner);
const overlaySpinner = document.getElementById("overlaySpinner");
console.log(overlaySpinner);



// Call function

photoPrinter();
button.addEventListener("click", overlayCloser);
setTimeout(loader, 1000);

// ***FUNCTIONS***

function photoPrinter() {
    axios.get(baseUrl + resourcePhotos, { params })
        .then((photos) => {
            const cards = photos.data;
            console.log(cards);
            console.log(cards.length);
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
                    <img class="imageCard" src="${images}" alt="${title}">
                </div>
                <div class="text-container">
                    <p>${title}</p>
                </div>
                </div>`
                container.innerHTML = template;
            }

            const realCards = document.querySelectorAll(".card");
            console.log(realCards);

            realCards.forEach((singleCard) => {
                singleCard.addEventListener("click", () => {
                    const imageCard = singleCard.querySelector(".imageCard");
                    console.log(imageCard);
                    const giantImage = document.getElementById("giantImage");
                    console.log(giantImage);
                    giantImage.src = imageCard.src;
                    overlay();
                });
            })


        })
        .catch((error) => {
            console.log(error);
        })
}


function overlay() {
    overlayContainer.classList.add("overlay");
    overlayContainer.classList.remove("d-none");
    overlaySpinner.classList.remove("d-none");
    setTimeout(overlayLoader, 1000);

}

function overlayCloser() {

    overlayContainer.classList.remove("overlay");
    button.classList.add("d-none");
    giantCard.classList.add("d-none");

}

function loader() {
    spinner.classList.add("d-none");
    container.classList.remove("d-none");
}

function overlayLoader() {
    overlaySpinner.classList.add("d-none");
    button.classList.remove("d-none");
    giantCard.classList.remove("d-none");
}


































































