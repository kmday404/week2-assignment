console.log("test");
console.dir(document);

const images = [
  {
    src: "./assets/car-interior.jpg",
    alt: "Car interior",
    height: 200,
    width: 300,
  },
  {
    src: "./assets/cat-1.jpg",
    alt: "A grey cat",
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
}
createThumbnails(thumbnailContainer);

function handleClick() {
  console.log("You have clicked the button!");
  document.body.style.backgroundImage = images;
}
//2nd we need to set up our event listener
//addEventsListeners has two arguments (type of event, name of event handler)

//we need to append the image to the container -- append is to add to, so yu cannot append children if there is no HTML foundations

//you might not want to return the element, e.g. we have a functin that creates images
//function createImage(imageSrc, imageAlt){
//const newImage = document.createElement("img")
// newImage.src = imageSrc;
// newImage.alt = imageAlt;
//dont forget to append the image here
//}
//createImage("link", "beautiful image");
//in this case you won't be using the src or the alt elsewhere in your code. so you won't want to return them.

//function createLargeImage() {}
