console.log("test");
console.dir(document);

const images = [
  {
    src: "./assets/cat-1.jpg",
    alt: "A grey cat",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/car-interior.jpg",
    alt: "Car interior",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/cygnet.jpg",
    alt: "A cygnet",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/red-arrows.png",
    alt: "The red arows (planes) flying in the sky",
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
    alt: "close up image of strawberries",
    height: 200,
    width: 300,
  },
];

let thumbnailContainer = document.getElementById("thumbnail-container");
console.log(thumbnailContainer);

let mainImageContainer = document.getElementById("main-image-container");
console.log(mainImageContainer);

//STEP 2: write a function to create the images in our thumbnail and append them later
function createThumbnails(thumbnailContainer) {
  images.forEach(function (thumbnail, index) {
    let image = document.createElement("img");
    image.src = images[index].src;
    image.alt = images[index].alt;
    image.height = 150;
    image.width = 200;
    thumbnailContainer.appendChild(image);
    image.className = "img-1";
    image.addEventListener("click", handleClick);
  });
  // debugger;
  function handleClick() {
    createLargeImage(this.src); //I asked chatGPT why createLargeImage(thumbnail[index]); wasn't working here and it suggested using 'this' - I don't fully understand the 'this' function... "You might want to use this to refer to the clicked image and manage the larger image container separately." "When this is used inside an event handler, it refers to the element that the event was fired on. For example, if you have an onclick event on an <img> element, this refers to that <img> element."
  }
}
createThumbnails(thumbnailContainer);

function createLargeImage(src) {
  //I think src is the parameter here because of the chatGPT code I used on line62
  let largeImageContainer = document.getElementById("main-image-container");
  largeImageContainer.innerHTML = ""; // Clear previous images
  let image = document.createElement("img");
  image.src = src; // again the source is src because of the coding used above, I tried to change this to another word but got errors, I am unsure why this is
  image.className = "img-2";
  largeImageContainer.appendChild(image);
}

const previousImageButton = document.getElementById("previous");
function preiousImage(index) {
  //clicks = ;
}
