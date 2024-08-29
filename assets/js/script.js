$(document).ready(function () {
  $(
    "#about_scroll, #picks_scroll, #music_scroll, #games_scroll, #totw_scroll, #contact_scroll"
  ).fadeOut();

  $("#about").click(function () {
    $("#index").fadeOut();
    $("#about_scroll").fadeIn();
    $("#about_left").addClass("animated slideInLeft");
    $("#about_right").addClass("animated slideInRight");
  });

  $("#picks").click(function () {
    $("#index").fadeOut();
    $("#picks_scroll").fadeIn();
    $("#picks_left").addClass("animated slideInLeft");
    $("#picks_right").addClass("animated slideInRight");
  });

  $("#music").click(function () {
    $("#index").fadeOut();
    $("#music_scroll").fadeIn();
    $("#music_left").addClass("animated slideInLeft");
    $("#music_right").addClass("animated slideInRight");
  });

  $("#games").click(function () {
    $("#index").fadeOut();
    $("#games_scroll").fadeIn();
    $("#games_left").addClass("animated slideInLeft");
    $("#games_right").addClass("animated slideInRight");
  });

  $("#totw_scroll").fadeOut(); // Ensure that #totw_scroll is hidden initially

  $("#totw").click(function () {
    $("#index").fadeOut();
    $("#totw_scroll").fadeIn();
    $("#totw_left").addClass("animated slideInLeft");
    $("#totw_right").addClass("animated slideInRight");
  });

  $("#contact").click(function () {
    $("#index").fadeOut();
    $("#contact_scroll").fadeIn();
    $("#contact_left").addClass("animated slideInLeft");
    $("#contact_right").addClass("animated slideInRight");
  });

  $(".back").click(function () {
    $(".pages").fadeOut();
    $("#index").fadeIn();
    $("#index_left").addClass("animated slideInLeft");
    $("#index_right").addClass("animated slideInRight");
  });
});

window.addEventListener(
  "keydown",
  function (e) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
      e.preventDefault();
    }
  },
  false
);

var img = new Image();
img.crossOrigin = "Anonymous"; // Handle CORS issues if supported by the server
img.src = "assets/images/IMG_9248 copy.jpg";

img.onload = function () {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  console.log("Image loaded with width:", img.width, "and height:", img.height);

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  try {
    var imageData = ctx.getImageData(0, 0, img.width, img.height);
    console.log("Image data successfully retrieved:", imageData);
    // Process imageData here
  } catch (error) {
    console.error("Error accessing image data: ", error);
  }
};

img.onerror = function () {
  console.error("Failed to load image");
};

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    items: 1, // Adjust based on your requirements
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust based on your requirements
    autoplayHoverPause: true,
  });
});

/////////////////////////////////////
// TIC TAC TOE GAME
// document.addEventListener('DOMContentLoaded', () => {
//     const cells = document.querySelectorAll(".cell");
//     const message = document.getElementById("message");
//     const overlay = document.getElementById("overlay");
//     const restartBtn = document.getElementById("btn-restart");
//     const quitBtn = document.getElementById("btn-quit");
//     const clickAudio = document.getElementById("click");
//     const gameoverAudio = document.getElementById("gameover");
//     let currentTurn = "Player 1";
//     const wins = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     let wonArr;

//     cells.forEach((cell) => {
//         cell.addEventListener("mouseenter", hoverIn);
//         cell.addEventListener("mouseleave", hoverOut);
//         cell.addEventListener("click", action, { once: true });
//     });

//     restartBtn.addEventListener("click", restart);
//     quitBtn.addEventListener("click", quit);

//     function restart() {
//         message.innerText = "Player 1's Turn";
//         overlay.classList.remove("active");
//         cells.forEach((cell) => {
//             cell.addEventListener("mouseenter", hoverIn);
//             cell.addEventListener("mouseleave", hoverOut);
//             cell.classList.remove("cross", "circle", "cross-hover", "circle-hover");
//             cell.classList.remove("highlight");
//             cell.removeEventListener("click", action);
//             cell.addEventListener("click", action, { once: true });
//             cell.style.cursor = "pointer";
//         });
//         currentTurn = "Player 1";
//     }

//     function quit() {
//         window.close();
//     }

//     function action() {
//         let currentClass = currentTurn === "Player 1" ? "cross" : "circle";
//         this.classList.add(currentClass);
//         this.classList.remove(`${currentClass}-hover`);
//         clickAudio.play();

//         if (isWinner(currentClass)) {
//             message.innerText = `${currentTurn} Won !!!`;
//             wonArr.forEach((i) => cells[i].classList.add("highlight"));
//             reset();
//             return;
//         } else if (Array.from(cells).every((cell) => cell.classList.length === 2)) {
//             message.innerText = "Draw";
//             cells.forEach((cell) => cell.classList.add("highlight"));
//             reset();
//             return;
//         }

//         currentTurn = currentTurn === "Player 1" ? "Player 2" : "Player 1";
//         message.innerText = `${currentTurn}'s Turn!`;
//     }

//     function isWinner(curClass) {
//         return wins.some((win) => {
//             const result = win.every((i) => cells[i].classList.contains(curClass));
//             if (result) {
//                 wonArr = win;
//             }
//             return result;
//         });
//     }

//     function hoverIn() {
//         let currentClass = currentTurn === "Player 1" ? "cross" : "circle";
//         if (this.classList.contains("cross") || this.classList.contains("circle")) {
//             this.style.cursor = "not-allowed";
//         } else {
//             this.classList.add(`${currentClass}-hover`);
//         }
//     }

//     function hoverOut() {
//         if (this.classList.contains("cross-hover") || this.classList.contains("circle-hover")) {
//             this.classList.remove("cross-hover");
//             this.classList.remove("circle-hover");
//         }
//     }

//     function reset() {
//         cells.forEach((cell) => {
//             cell.removeEventListener("mouseenter", hoverIn);
//             cell.removeEventListener("mouseleave", hoverOut);
//             cell.removeEventListener("click", action);
//             cell.style.cursor = "not-allowed";
//         });
//         gameoverAudio.play();
//         setTimeout(() => {
//             overlay.classList.add("active");
//         }, 1750);
//     }
// SNAKE GAME
const canvas3 = document.getElementById("game");
const context = canvas3.getContext("2d");
const grid = 16;
let count = 0;

const snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4,
};
const apple = {
  x: 320,
  y: 320,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);

  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas3.width, canvas3.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) {
    snake.x = canvas3.width - grid;
  } else if (snake.x >= canvas3.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas3.height - grid;
  } else if (snake.y >= canvas3.height) {
    snake.y = 0;
  }

  snake.cells.unshift({ x: snake.x, y: snake.y });

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  context.fillStyle = "red";
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  context.fillStyle = "green";
  snake.cells.forEach((cell, index) => {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    for (let i = index + 1; i < snake.cells.length; i++) {
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

document.addEventListener("keydown", (e) => {
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

document.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  if (x < canvas3.width / 2 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (x > canvas3.width / 2 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (y < canvas3.height / 2 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (y > canvas3.height / 2 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop);
