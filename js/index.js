// array of images objects
const imgObj = [
  (img01 = {
    imgSrcTh: "photos/thumbnails/01.jpg",
    imgSrc: "photos/01.jpg",
    imgAlt: "Countryside straw fields",
    imgCaption:
      "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
    imgTitle: "Hay Bales"
  }),
  (img02 = {
    imgSrcTh: "photos/thumbnails/02.jpg",
    imgSrc: "photos/02.jpg",
    imgAlt: "lake below the snow mountain",
    imgCaption:
      "The lake was so calm today. We had a great view of the snow on the mountains from here.",
    imgTitle: "Lake"
  }),
  (img03 = {
    imgSrcTh: "photos/thumbnails/03.jpg",
    imgSrc: "photos/03.jpg",
    imgAlt: "revealing the canyon",
    imgCaption:
      "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
    imgTitle: "Canyon"
  }),
  (img04 = {
    imgSrcTh: "photos/thumbnails/04.jpg",
    imgSrc: "photos/04.jpg",
    imgAlt: "beauty of iceberg",
    imgCaption:
      "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.",
    imgTitle: "Iceberg"
  }),
  (img05 = {
    imgSrcTh: "photos/thumbnails/05.jpg",
    imgSrc: "photos/05.jpg",
    imgAlt: "red cliffs and desert",
    imgCaption:
      "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
    imgTitle: "Desert"
  }),
  (img06 = {
    imgSrcTh: "photos/thumbnails/06.jpg",
    imgSrc: "photos/06.jpg",
    imgAlt: "trees of fall",
    imgCaption:
      "Fall is coming, I love when the leaves on the trees start to change color.",
    imgTitle: "Fall"
  }),
  (img07 = {
    imgSrcTh: "photos/thumbnails/07.jpg",
    imgSrc: "photos/07.jpg",
    imgAlt: "green trees plantation",
    imgCaption:
      "I drove past this plantation yesterday, everything is so green!",
    imgTitle: "Plantation"
  }),
  (img08 = {
    imgSrcTh: "photos/thumbnails/08.jpg",
    imgSrc: "photos/08.jpg",
    imgAlt: "sandy dunes of oregon coast",
    imgCaption:
      "My summer vacation to the Oregon Coast. I love the sandy dunes!",
    imgTitle: "Dunes"
  }),
  (img09 = {
    imgSrcTh: "photos/thumbnails/09.jpg",
    imgSrc: "photos/09.jpg",
    mgAlt: "countryside lane",
    imgCaption: "We enjoyed a quiet stroll down this countryside lane.",
    imgTitle: "Countryside Lane"
  }),
  (img10 = {
    imgSrcTh: "photos/thumbnails/10.jpg",
    imgSrc: "photos/10.jpg",
    imgAlt: "beautiful sunset and the river",
    imgCaption: "Sunset at the coast! The sky turned a lovely shade of orange.",
    imgTitle: "Sunset"
  }),
  (img11 = {
    imgSrcTh: "photos/thumbnails/11.jpg",
    imgSrc: "photos/11.jpg",
    imgAlt: "beautiful landscape from the cave",
    imgCaption:
      "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    imgTitle: "Cave"
  }),
  (img12 = {
    imgSrcTh: "photos/thumbnails/12.jpg",
    imgSrc: "photos/12.jpg",
    imgAlt: "beautiful snow mountains",
    imgCaption:
      "I did a tour of a cave today and the view of the landscape below was breathtaking.",
    imgTitle: "Bluebells"
  })
];

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
//filter flag
let filterFlag = false;
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
  //filterFlag is used to scroll the images for the first time page loads
  if (!filterFlag) {
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
  } else {
    for (let i = 0; i < imgArrayShown.length; i++) {
      if (currentImgSrc.toString().indexOf(imgArrayShown[i]) > -1) {
        if (i === 0) {
          changeImg(imgArrayShown[imgArrayShown.length - 1]);
          console.log(imgArrayShown[imgArrayShown.length - 1]);
          currentImgSrc = imgArrayShown[imgArrayShown.length - 1];
          break;
        }
        changeImg(imgArrayShown[i - 1]);
        console.log(imgArrayShown[i - 1]);
        currentImgSrc = imgArrayShown[i - 1];
        break;
      }
    }
  }
};

const next = function() {
  // console.log(currentImgSrc.toString());
  if (!filterFlag) {
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
  } else {
    for (let i = 0; i < imgArrayShown.length; i++) {
      if (currentImgSrc.toString().indexOf(imgArrayShown[i]) > -1) {
        if (i === 0) {
          changeImg(imgArrayShown[imgArrayShown.length - 1]);
          console.log(imgArrayShown[imgArrayShown.length - 1]);
          currentImgSrc = imgArrayShown[imgArrayShown.length - 1];
          break;
        }
        changeImg(imgArrayShown[i - 1]);
        console.log(imgArrayShown[i - 1]);
        currentImgSrc = imgArrayShown[i - 1];
        break;
      }
    }
  }
};

function filter() {
  // Declare variables for filter purpose
  const input = document.getElementById("searchBox");
  const filter = input.value.toUpperCase();
  const thumbnails = document.getElementById("thumbnails");
  const img = thumbnails.getElementsByTagName("img");

  // set filter flag true
  filterFlag = true;

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
      img[i].parentNode.style.display = "";
      img[i].style.display = "";
      img[i].nextElementSibling.style.display = "";
      countVisible = imgSrc.length - countInvisible;
      imgArrayShown.push(img[i].dataset.src);
      console.log("in Show " + imgArrayShown.length);
      // console.log("in show " + countVisible);
    } else {
      img[i].parentNode.style.display = "none";
      img[i].style.display = "none";
      img[i].nextElementSibling.style.display = "none";
      countInvisible++;
      imgArrayHidden.push(img[i].dataset.src);
      countVisible = imgSrc.length - countInvisible;
      console.log("in hide " + imgArrayHidden.length);
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

  //add caption to lightbox
  lightBoxCaption(obj.dataset.caption);
  // add image to lightbox
  changeImg(obj.dataset.src);
  //add event listener to previous and next buttons
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

function lightBoxCaption(value) {
  document.getElementById("caption").innerText = value.toUpperCase();
}
