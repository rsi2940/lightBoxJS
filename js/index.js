function filter() {
  // Declare variables for filter purpose
  const input = document.getElementById("searchBox");
  const filter = input.value.toUpperCase();
  const thumbnails = document.getElementById("thumbnails");
  const img = thumbnails.getElementsByTagName("img");

  //console.log(img[0].dataset.caption);

  // Looping images / hide non-matching caption images
  for (let i = 0; i < img.length; i++) {
    const caption = img[i].dataset.caption;
    if (caption.toUpperCase().indexOf(filter) > -1) {
      //firstString.indexOf(secondString)
      //implies to if there is no match
      //it returns -1
      img[i].style.display = "";
    } else {
      img[i].style.display = "none";
    }
  }
}

function hideLightBox() {
  document.getElementById("lightBox").style.display = "none";
}

//console.log("hello");
function viewLightBox(source, alt) {
  //console.log("welcome to lightbox func");
  console.log(this.dataset.caption);
}
