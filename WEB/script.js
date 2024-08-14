// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Get the .gif element
const gif = document.querySelector('.gif');

// Create a close button
const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.style.position = 'absolute';
closeButton.style.top = '0';
closeButton.style.right = '50';
closeButton.style.background = 'red'; // white background
closeButton.style.border = '1px solid #000'; // black border
closeButton.style.padding = '0.5rem';
closeButton.style.cursor = 'pointer';
closeButton.style.fontSize = '1rem'; // make the text larger

// Add the close button to the .gif element
gif.appendChild(closeButton);

// Add an event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the .gif element
  gif.style.display = 'none';
});

// // Back to top button functionality
// const backToTopButton = document.createElement("button");
// backToTopButton.innerText = "↑";
// backToTopButton.style.position = "fixed";
// backToTopButton.style.bottom = "20px";
// backToTopButton.style.right = "20px";
// backToTopButton.style.display = "none";
// backToTopButton.style.backgroundColor = "#1e90ff";
// backToTopButton.style.color = "#fff";
// backToTopButton.style.border = "none";
// backToTopButton.style.padding = "10px 15px";
// backToTopButton.style.cursor = "pointer";
// backToTopButton.style.borderRadius = "5px";
// document.body.appendChild(backToTopButton);

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 500) {
//     backToTopButton.style.display = "block";
//   } else {
//     backToTopButton.style.display = "none";
//   }
// });

// backToTopButton.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// SLIDER FUNCTIONALITY
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

// Functions
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const init = function () {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

// Event handlers
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
