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
                    <img class="imagesClass" src="${images}" alt="${title}">
                </div>
                <div class="text-container">
                    <p>${title}</p>
                </div>
                </div>`
                container.innerHTML = template;
            }

            const realImages = document.querySelectorAll(".imagesClass");
            console.log(realImages);
            for (let i = 0; i <= realImages.length - 1; i++) {
                const singleImage = realImages[i];
                console.log(singleImage);
                singleImage.addEventListener("click", overlay);


            }
            const realCards = document.querySelectorAll(".card");
            const imgCard = realCards.querySelector(".imagesClass");
            console.log(imgCard);


        })
        .catch((error) => {
            console.log(error);
        })
}



function overlay(event) {
    console.log(event.target);
    const imageUrl = event.target.src;
    const giantImage = document.getElementById("giantImage");
    giantImage.src = imageUrl;
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


































































