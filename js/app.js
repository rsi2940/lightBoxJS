//Model View Controller approach

// model
const model = {
  declaration() {
    this.imgArrayShown = [];
  },

  lightBoxVariable() {
    this.currentImgSrc = "";
    this.currentImgSrcTh = "";
    this.currentImgAlt = "";
    this.caption = "";
  },

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
  }
};
const thumbnailsView = {
  clearThumbnails() {
    const parent = document.getElementById("thumbnails");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
  lightBoxCaption() {
    //document.getElementById("caption").innerText = model.caption.toUpperCase();
    this.captionEl = document.createElement("div");
    this.captionEl.className = "lbCaption";
    this.captionEl.innerText = model.caption.toUpperCase();
    this.pictureEl.appendChild(this.captionEl);
  },

  changeImg() {
    this.pictureEl = document.getElementById("lightBoxPicture");
    this.sourceEl = document.createElement("source");
    while (this.pictureEl.firstChild) {
      this.pictureEl.removeChild(this.pictureEl.firstChild);
    }
    this.sourceEl.srcset = model.currentImgSrcTh;
    this.sourceEl.media = "max-width: 37em";
    this.imgEl = document.createElement("img");
    this.imgEl.className = "lbImage";

    this.imgEl.src = model.currentImgSrc;
    this.imgEl.alt = model.currentImgAlt;
    this.pictureEl.appendChild(this.sourceEl);
    this.pictureEl.appendChild(this.imgEl);
    // document.getElementsByClassName("lbImage")[0].src = changeSrc;
  },
  lightBoxX() {
    this.hideLB = document.getElementsByClassName("x");
  }
};

const navigation = {
  prev() {
    // console.log(model.imgArrayShown[0].imgSrc);
    // console.log(model.currentImgSrc);
    for (let i = 0; i < model.imgArrayShown.length; i++) {
      if (model.currentImgSrc.indexOf(model.imgArrayShown[i].imgSrc) > -1) {
        if (i === 0) {
          model.currentImgSrc =
            model.imgArrayShown[model.imgArrayShown.length - 1].imgSrc;
          model.currentImgSrcTh =
            model.imgArrayShown[model.imgArrayShown.length - 1].imgSrcTh;
          model.currentImgAlt =
            model.imgArrayShown[model.imgArrayShown.length - 1].imgAlt;
          lightBoxView.changeImg();

          model.caption =
            model.imgArrayShown[model.imgArrayShown.length - 1].imgCaption;
          lightBoxView.lightBoxCaption();

          break;
        }

        model.currentImgSrc = model.imgArrayShown[i - 1].imgSrc;
        model.currentImgSrcTh = model.imgArrayShown[i - 1].imgSrcTh;
        model.currentImgAlt = model.imgArrayShown[i - 1].imgAlt;
        lightBoxView.changeImg();

        model.caption = model.imgArrayShown[i - 1].imgCaption;
        lightBoxView.lightBoxCaption();
        break;
      }
    }
  },
  next() {
    for (let i = 0; i < model.imgArrayShown.length; i++) {
      if (model.currentImgSrc.indexOf(model.imgArrayShown[i].imgSrc) > -1) {
        if (i === model.imgArrayShown.length - 1) {
          model.currentImgSrc = model.imgArrayShown[0].imgSrc;
          model.currentImgSrcTh = model.imgArrayShown[0].imgSrcTh;
          model.currentImgAlt = model.imgArrayShown[0].imgAlt;
          lightBoxView.changeImg();
          model.caption = model.imgArrayShown[0].imgCaption;
          lightBoxView.lightBoxCaption();

          break;
        }
        model.currentImgSrc = model.imgArrayShown[i + 1].imgSrc;
        model.currentImgSrcTh = model.imgArrayShown[i + 1].imgSrcTh;
        model.currentImgAlt = model.imgArrayShown[i + 1].imgAlt;
        lightBoxView.changeImg();
        model.caption = model.imgArrayShown[i + 1].imgCaption;
        lightBoxView.lightBoxCaption();
        break;
      }
    }
  }
};

//controller
const controller = {
  //filter function
  filter() {
    // Declare variables for filter purpose
    const input = searchBox.searchBox;
    const filter = input.value.toUpperCase();
    const images = model.imgObj;

    //reset model array data
    model.declaration();
    // Loop to hide non-matching photo & caption
    for (let i = 0; i < images.length; i++) {
      const caption = images[i].imgCaption;
      if (caption.toUpperCase().indexOf(filter) > -1) {
        model.imgArrayShown.push(images[i]);
      }
    }
    //clear thumbnails before populating new set of photos
    thumbnailsView.clearThumbnails();
    //add new sorted thumbnails to display
    for (i = 0; i < model.imgArrayShown.length; i++) {
      thumbnailsView.addThumbnails(
        model.imgArrayShown[i].imgSrcTh,
        model.imgArrayShown[i].imgAlt,
        model.imgArrayShown[i].imgTitle,
        model.imgArrayShown[i].imgCaption,
        model.imgArrayShown[i].imgSrc
      );
    }
  },

  init() {
    searchBox.init();
    model.declaration();
    model.imgObj.forEach(function(obj) {
      model.imgArrayShown.push(obj);
      thumbnailsView.addThumbnails(
        obj.imgSrcTh,
        obj.imgAlt,
        obj.imgTitle,
        obj.imgCaption,
        obj.imgSrc
      );
    }, this);

    //add event listener to input
    searchBox.searchBox.addEventListener("keyup", controller.filter);
  },
  //hide lightbox
  hideLightBox() {
    document.getElementById("lightBox").style.display = "none";
  },
  //show next and prev labels
  showNextPrev() {
    document.getElementsByClassName("previous")[0].style.display = "";
    document.getElementsByClassName("next")[0].style.display = "";
  },
  //hide next and prev labels
  hideNextPrev() {
    document.getElementsByClassName("previous")[0].style.display = "none";
    document.getElementsByClassName("next")[0].style.display = "none";
  },
  //add click listener to prev and next labels
  addClickListener() {
    document
      .getElementsByClassName("previous")[0]
      .addEventListener("click", navigation.prev);
    document
      .getElementsByClassName("next")[0]
      .addEventListener("click", navigation.next);
  },
  //add keyboard listener to arrow and escape function
  addKeyboardArrowListener(flag) {
    if (flag === 2) {
      document.addEventListener("keydown", e => {
        if (e.keyCode === 39) {
          navigation.next();
        }
        if (e.keyCode === 37) {
          navigation.prev();
        }
        if (e.keyCode === 27) {
          controller.hideLightBox();
        }
      });
    } else {
      document.addEventListener("keydown", e => {
        if (e.keyCode === 27) {
          controller.hideLightBox();
        }
      });
    }
  },
  //lightBox to display photo and caption and add event listeners
  lightBox(obj) {
    const lightBox = document.getElementById("lightBox");
    lightBox.style.display = "flex";

    //add event listener to lightbox X to hide lightbox
    document
      .getElementsByClassName("x")[0]
      .addEventListener("click", controller.hideLightBox);

    //set image source
    model.currentImgSrc = obj.target.dataset.src;
    model.currentImgSrcTh = obj.target.src;
    model.currentImgAlt = obj.target.alt;
    model.caption = obj.target.dataset.caption;

    // add image to lightbox
    lightBoxView.changeImg();
    //add caption to lightbox
    lightBoxView.lightBoxCaption();
    //add event listener to previous and next buttons
    if (model.imgArrayShown.length < 2) {
      controller.hideNextPrev();
      controller.addKeyboardArrowListener(1);
    } else {
      controller.showNextPrev();
      controller.addKeyboardArrowListener(2);
      controller.addClickListener();
    }
  },
  //add event listeners to each images displayed
  listenThumbnails() {
    const images = thumbnailsView.thumbnails.getElementsByClassName("images");
    for (let i = 0; i < images.length; i++) {
      images[i].firstChild.addEventListener("click", controller.lightBox);
    }
  }
};

controller.init();
