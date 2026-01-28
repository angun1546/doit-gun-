let pics = document.querySelectorAll(".pic");
let lightbox = document.querySelector("#lightbox");
let lightboximg = lightbox.querySelector("#lightboxImage");

pics.forEach((el, idx) => {
  el.addEventListener("click", showlightbox);
});

function showlightbox() {
  let biglocation = this.getAttribute("data-src");
  lightboximg.setAttribute("src", biglocation);
  lightbox.style.display = "block";
}
lightbox.onclick = function () {
  lightbox.style.display = "";
};
