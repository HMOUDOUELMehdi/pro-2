// for animation menu icons
let nspan = document.querySelector(".nav-span")
let menu = document.querySelector(".menu")
nspan.addEventListener("click", () =>  {
    nspan.classList.toggle("active");
    menu.classList.toggle("active");
})


// carousel in photo
let slideIndex = 1;
showSlides(slideIndex);
        // Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll("#mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.transition = "1s";
}


// carousel in photo
let slide = 1;
showSlid(slide);
        // Next/previous controls
function next(n) {
  showSlid(slide += n);
}
function showSlid(n) {
  let i;
  let slid = document.querySelectorAll("#tw0");
  if (n > slid.length) {slide = 1}
  if (n < 1) {slide = slid.length}
  for (i = 0; i < slid.length; i++) {
    slid[i].style.display = "none";
  }
  slid[slide-1].style.display = "block";
  slid[slide-1].style.transition = "1s";
}





