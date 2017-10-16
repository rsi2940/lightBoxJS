//full resolution image sources
const imgSrc = [
  "photos/01.jpg",
  "photos/02.jpg",
  "photos/03.jpg",
  "photos/04.jpg",
  "photos/05.jpg",
  "photos/06.jpg",
  "photos/07.jpg",
  "photos/08.jpg",
  "photos/09.jpg",
  "photos/10.jpg",
  "photos/11.jpg",
  "photos/12.jpg"
];
// new rendered array
let imgArrayShown = [];
let imgArrayHidden = [];
// image source variable declaration for future use to slide the image
let currentImgSrc = "";

// counter for total number of invisible photoes
let countInvisible = 0;
let countVisible = imgSrc.length;

//function to change image in lightbox
function changeImg(changeSrc) {
  document.getElementsByClassName("lbImage")[0].src = changeSrc;
}

//add function to next and previous arrow

const prev = function() {
  // console.log(currentImgSrc.toString());
  for (let i = 0; i < imgSrc.length; i++) {
    if (currentImgSrc.toString().indexOf(imgSrc[i]) > -1) {
      if (i === 0) {
        changeImg(imgSrc[imgSrc.length - 1]);
        console.log(imgSrc[imgSrc.length - 1]);
        currentImgSrc = imgSrc[imgSrc.length - 1];
        break;
      }
      changeImg(imgSrc[i - 1]);
      console.log(imgSrc[i - 1]);
      currentImgSrc = imgSrc[i - 1];
      break;
    }
  }
};

const next = function() {
  // console.log(currentImgSrc.toString());
  for (let i = 0; i < imgSrc.length; i++) {
    if (currentImgSrc.toString().indexOf(imgSrc[i]) > -1) {
      if (i === imgSrc.length - 1) {
        changeImg(imgSrc[0]);
        console.log(imgSrc[0]);
        currentImgSrc = imgSrc[0];
        break;
      }
      changeImg(imgSrc[i + 1]);
      console.log(imgSrc[i + 1]);
      currentImgSrc = imgSrc[i + 1];
      break;
    }
  }
};

function filter() {
  // Declare variables for filter purpose
  const input = document.getElementById("searchBox");
  const filter = input.value.toUpperCase();
  const thumbnails = document.getElementById("thumbnails");
  const img = thumbnails.getElementsByTagName("img");

  //console.log(img[0].dataset.caption);
  countInvisible = 0;
  imgArrayShown = [];
  imgArrayHidden = [];

  // Loop to hide non-matching photo & caption
  for (let i = 0; i < img.length; i++) {
    const caption = img[i].dataset.caption;
    if (caption.toUpperCase().indexOf(filter) > -1) {
      //firstString.indexOf(secondString)
      //implies to if there is no match
      //it returns -1
      img[i].style.display = "";
      img[i].nextElementSibling.style.display = "";
      countVisible = imgSrc.length - countInvisible;
      imgArrayShown.push(img[i].dataset.src);
      console.log("in Show " + imgArrayShown[i]);
      // console.log("in show " + countVisible);
    } else {
      img[i].style.display = "none";
      img[i].nextElementSibling.style.display = "none";
      countInvisible++;
      imgArrayHidden.push(img[i].dataset.src);
      countVisible = imgSrc.length - countInvisible;
      console.log("in hide " + imgArrayHidden[i]);
      //console.log("in hide " + countVisible);
      // console.log("i in hide" + i);
    }
  }
}

function hideLightBox() {
  document.getElementById("lightBox").style.display = "none";
}

//view full resolution photo
function viewLightBox(obj) {
  //console.log("welcome to lightbox func");
  // console.log(obj.dataset.caption);
  //console.log(obj);

  const lightBox = document.getElementById("lightBox");
  lightBox.style.display = "flex";
  currentImgSrc = obj.dataset.src;
  //nouncoment
  // console.log(obj.dataset.src);
  // console.log(document.getElementsByClassName("lbImage")[0].src);

  // add image to lightbox
  changeImg(obj.dataset.src);
  document
    .getElementsByClassName("previous")[0]
    .addEventListener("click", prev);
  document.getElementsByClassName("next")[0].addEventListener("click", next);
}

//add caption to all photoes on the gallery
function addTitle(value) {
  // console.log(value.nextSibling);
  value.nextElementSibling.innerText = value.title;
  //console.log(value);
}
