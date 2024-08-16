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
// Function to disable scrolling for specific keys
function disableScrollKeys(e) {
  // List of key codes that trigger scrolling
  const keys = [32, 37, 38, 39, 40]; // Spacebar (32), Left (37), Up (38), Right (39), Down (40)

  if (keys.includes(e.keyCode)) {
    e.preventDefault(); // Prevent the default scroll behavior
    return false;
  }
}

// Add event listener to capture keydown events
window.addEventListener('keydown', disableScrollKeys);

// Function to enable scrolling again
function enableScrollKeys() {
  window.removeEventListener('keydown', disableScrollKeys);
}

// gif
document.addEventListener("DOMContentLoaded", () => {
  // Get the .gif element
  const gif = document.querySelector(".gif");

  // Check if the .gif element exists
  if (gif) {
    // Create a close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.position = "absolute";
    closeButton.style.top = "0";
    closeButton.style.right = "10px"; // Use px or other units
    closeButton.style.background = "red";
    closeButton.style.border = "1px solid #000";
    closeButton.style.padding = "0.5rem";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "1rem";

    // Add the close button to the .gif element
    gif.appendChild(closeButton);

    // Add an event listener to the close button
    closeButton.addEventListener("click", () => {
      // Hide the .gif element
      gif.style.display = "none";
    });
  } else {
    console.error("The .gif element was not found.");
  }
});

// Back to top button functionality
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.display = "none";
backToTopButton.style.backgroundColor = "#1e90ff";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.borderRadius = "5px";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
  backToTopButton.style.display = window.scrollY > 500 ? "block" : "none";
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// SLIDER FUNCTIONALITY
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

// Add touch support for mobile devices
const touchStartX = 0;
const touchEndX = 0;

document.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].clientX);
document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) nextSlide();
  if (touchEndX > touchStartX) prevSlide();
});


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
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
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

//////////////////////////////////
// SKILLS
document.addEventListener("DOMContentLoaded", function() {
  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
    const button = skill.querySelector(".skill-btn");
    const image = skill.querySelector(".skill-image");

    button.addEventListener("click", function() {
      image.classList.add("show");

      setTimeout(function() {
        image.classList.remove("show");
      }, 3000); // Hide the image after 3 seconds
    });
  });
});




////////////////////////////////////////
// TIC TAC TOE GAME

const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("btn-restart");
const quitBtn = document.getElementById("btn-quit");
const clickAudio = document.getElementById("click");
const gameoverAudio = document.getElementById("gameover");
let currentTurn = "Player 1";
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let wonArr;

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", hoverIn);
  cell.addEventListener("mouseleave", hoverOut);
  cell.addEventListener("click", action, { once: true });
});

restartBtn.addEventListener("click", restart);
quitBtn.addEventListener("click", quit);

function restart() {
  message.innerText = "Player 1's Turn";
  overlay.classList.remove("active");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", hoverIn);
    cell.addEventListener("mouseleave", hoverOut);
    cell.classList.remove("cross", "circle", "cross-hover", "circle-hover");
    cell.classList.remove("highlight");
    cell.removeEventListener("click", action);
    cell.addEventListener("click", action, { once: true });
    cell.style.cursor = "pointer";
  });
}

function quit() {
  window.close();
}

function action() {
  let currentClass = currentTurn === "Player 1" ? "cross" : "circle";
  this.classList.add(currentClass);
  this.classList.remove(`${currentClass}-hover`);
  clickAudio.play();

  if (isWinner(currentClass)) {
    message.innerText = `${currentTurn} Won !!!`;
    wonArr.forEach((i) => cells[i].classList.add("highlight"));

    reset();
    return;
  } else {
    const res = Array.from(cells).every((cell) => {
      return cell.classList.length === 2;
    });
    if (res) {
      message.innerText = `Draw`;

      cells.forEach((cell) => {
        cell.classList.add("highlight");
      });
      reset();
      return;
    }
  }

  currentTurn === "Player 1"
    ? (currentTurn = "Player 2")
    : (currentTurn = "Player 1");

  message.innerText = `${currentTurn}'s Turn!`;
}
function isWinner(curClass) {
  return wins.some((win) => {
    const res = win.every((i) => cells[i].classList.contains(curClass));
    if (res) {
      wonArr = win;
    }
    return res;
  });
}

function hoverIn() {
  let currentClass = currentTurn === "Player 1" ? "cross" : "circle";
  if (this.classList.contains("cross") || this.classList.contains("circle")) {
    this.style.cursor = "not-allowed";
  } else {
    this.classList.add(`${currentClass}-hover`);
  }
}

function hoverOut() {
  if (
    this.classList.contains("cross-hover") ||
    this.classList.contains("circle-hover")
  ) {
    this.classList.remove("cross-hover");
    this.classList.remove("circle-hover");
  }
}

function reset() {
  cells.forEach((cell) => {
    cell.removeEventListener("mouseenter", hoverIn);
    cell.removeEventListener("mouseleave", hoverOut);
    cell.removeEventListener("click", action);
    cell.style.cursor = "not-allowed";
  });
  gameoverAudio.play();

  setTimeout(() => {
    overlay.classList.add("active");
  }, 1750);
}

// POPUP

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

///////////////////////////////////
// SNAKES AND LADDERS

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 16;
var count = 0;

var snake = {
  x: 160,
  y: 160,

  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,

  // keep track of all grids the snake body occupies
  cells: [],

  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  // draw snake one cell at a time
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {

    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {

      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself by checking that it's
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

// start the game
requestAnimationFrame(loop);
