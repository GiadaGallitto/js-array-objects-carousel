const images = [
    {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },

    {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const objList = [];

const divCarousel = document.querySelector("div.carousel-image")

let current;

for (let i=0; i < images.length; i++){
    
    const gameElement = images[i];

    let divElement = document.createElement("div");
    divElement.classList.add("my-carousel-item");

    let img = document.createElement("img");
    img.classList.add( "w-100")
    img.src = "./" + gameElement.image;

    divElement.append(img);
    divCarousel.appendChild(divElement)
    objList.push(divElement)

    current = objList[i]
    
    console.log(current);
}

console.log(objList);

current.classList.add("active")

const previousButton = document.querySelector("previous");

const nextButton = document.querySelector("next")


// previousButton.addEventListener("click", function(){

    
// })