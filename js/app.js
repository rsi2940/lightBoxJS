//Model View Controller approach

// model
const model = {
  imgObj: [
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
      imgCaption:
        "Sunset at the coast! The sky turned a lovely shade of orange.",
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
        "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
      imgTitle: "Bluebells"
    })
  ]
};

//view(s)
const searchBox = {
  init() {
    this.searchBox = document.getElementById("searchBox");
    //this.searchBox = "";
  }
};
const thumbnailsView = {
  clearThumbnails() {
    console.log("clearing...");
    const parent = document.getElementById("thumbnails");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
    console.log("cleared!!");
  },

  addThumbnails(src, alt, title, caption, lbSrc) {
    this.thumbnails = document.getElementById("thumbnails");
    this.imagesDiv = document.createElement("div");
    this.imagesDiv.className = "images";
    this.imgEl = document.createElement("img");
    this.imgEl.src = src;
    this.imgEl.alt = alt;
    this.imgEl.title = title;
    this.imgEl.dataset.caption = caption;
    this.imgEl.dataset.src = lbSrc;
    const imgName = document.createElement("h5");
    imgName.innerText = title;
    this.imagesDiv.appendChild(this.imgEl);
    thumbnailsView.thumbnails.appendChild(thumbnailsView.imagesDiv);
    this.imagesDiv.appendChild(imgName);

    //add eventListener
    controller.listenThumbnails();
  }
};

const lightBoxView = {
  lightBoxCaption(value) {
    document.getElementById("caption").innerText = value.toUpperCase();
  },

  changeImg(changeSrc) {
    document.getElementsByClassName("lbImage")[0].src = changeSrc;
  }
};

//controller
const controller = {
  filter() {
    // Declare variables for filter purpose
    console.log("infilter");
    const input = searchBox.searchBox;
    const filter = input.value.toUpperCase();
    const images = model.imgObj;
    console.log(filter);

    // set filter flag true
    filterFlag = true;

    //console.log(img[0].dataset.caption);
    countInvisible = 0;
    imgArrayShown = [];
    imgArrayHidden = [];

    // Loop to hide non-matching photo & caption
    for (let i = 0; i < images.length; i++) {
      const caption = images[i].imgCaption;
      if (caption.toUpperCase().indexOf(filter) > -1) {
        imgArrayShown.push(images[i]);

        // console.log(images[i]);
      } else {
        // img[i].parentNode.style.display = "none";
        // img[i].style.display = "none";
        // img[i].nextElementSibling.style.display = "none";
        // countInvisible++;
        // imgArrayHidden.push(img[i].dataset.src);
        // countVisible = imgSrc.length - countInvisible;
        // console.log("in hide " + imgArrayHidden.length);
        //console.log("else " + caption);
        imgArrayHidden.push(images[i]);
      }
    }
    console.log(imgArrayHidden);
    console.log(imgArrayShown);
    thumbnailsView.clearThumbnails();
    for (i = 0; i < imgArrayShown.length; i++) {
      thumbnailsView.addThumbnails(
        imgArrayShown[i].imgSrcTh,
        imgArrayShown[i].imgAlt,
        imgArrayShown[i].imgTitle,
        imgArrayShown[i].imgCaption,
        imgArrayShown[i].imgSrc
      );
    }
  },

  init() {
    searchBox.init();
    model.imgObj.forEach(function(obj) {
      thumbnailsView.addThumbnails(
        obj.imgSrcTh,
        obj.imgAlt,
        obj.imgTitle,
        obj.imgCaption,
        obj.imgSrc
      );
    }, this);

    //filter function

    //add event listener to each thumbnails

    searchBox.searchBox.addEventListener("keyup", controller.filter);
  },

  lightBox(obj) {
    console.log(obj);
    console.log(obj.target.src);
    console.log(obj.target.dataset.caption);

    const lightBox = document.getElementById("lightBox");
    lightBox.style.display = "flex";
    currentImgSrc = obj.target.dataset.src;

    //add caption to lightbox
    lightBoxView.lightBoxCaption(obj.target.dataset.caption);
    // add image to lightbox
    lightBoxView.changeImg(currentImgSrc);
    //add event listener to previous and next buttons
    //remove   // document
    //         //     .getElementsByClassName("previous")[0]
    //this     //     .addEventListener("click", prev);
    //         // document
    //later    //     .getElementsByClassName("next")[0]
    //         //     .addEventListener("click", next);
  },

  listenThumbnails() {
    //console.log(thumbnailsView.thumbnails.getElementsByClassName("images"));
    const images = thumbnailsView.thumbnails.getElementsByClassName("images");

    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener("click", controller.lightBox);
      // console.log(images[i]);
    }
  }
};

controller.init();
