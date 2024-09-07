console.log("test");

let images = [
  {
    src: "./assets/car-interior.jpg",
    alt: "Car interior",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/cat-1.jpg",
    alt: "Cat",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/cygnet.jpg",
    alt: "Cygnet",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/red-arrows.jpg",
    alt: "The red arows (planes)",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/sky-mist.jpg",
    alt: "Orange sky over mountains with mist covering the hills",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/strawberries.jpg",
    alt: "Strawberries",
    height: 200,
    width: 300,
  },
];

const thumbnailContainer = document.getElementById("thumbnail-container");
console.log(thumbnailContainer);
//STEP 1: select the DOM elements that will contain my images
//select thubnail conatiner
//select the main image container

//STEP 2: write a function to create the images in our thumbnail and append them later
function createThumbnails(thumbnailContainer) {
  thumbnailContainer.forEach(function (thumbnail, index) {});
}

function createLargeImage() {}
