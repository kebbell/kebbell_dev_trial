$(document).ready(function () {
  // Hide all sections initially
  $("#about_scroll, #picks_scroll, #music_scroll, #games_scroll, #totw_scroll, #contact_scroll").fadeOut();

  // Define click events for various sections
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

  // $("#radio").click(function () {
  //   $("#index").fadeOut();
  //   $("#radio_scroll").fadeIn();
  //   $("#radio_left").addClass("animated slideInLeft");
  //   $("#radio_right").addClass("animated slideInRight");
  // });

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

  // Prevent arrow key scrolling
  window.addEventListener(
    "keydown",
    function (e) {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
        e.preventDefault();
      }
    },
    false
  );

  // Image handling
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

  // Initialize OWL Carousel
  $("#owl-demo").owlCarousel({
    items: 1, // Adjust based on your requirements
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust based on your requirements
    autoplayHoverPause: true
  });

  // Attach click event to the carousel item
  $('#owl-demo .item').on('click', function() {
    window.location.href = 'https://kebbell.github.io/SEK'; // Change this to your desired URL
  });
});

$("#radio").click(function () {
    window.location.href = "https://kebbell.github.io/SEK";
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


// // SNAKE GAME
// const canvas3 = document.getElementById("game");
// const context = canvas3.getContext("2d");
// const grid = 16;
// let count = 0;

// const snake = {
//   x: 160,
//   y: 160,
//   dx: grid,
//   dy: 0,
//   cells: [],
//   maxCells: 4,
// };
// const apple = {
//   x: 320,
//   y: 320,
// };

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function loop() {
//   requestAnimationFrame(loop);

//   if (++count < 4) {
//     return;
//   }

//   count = 0;
//   context.clearRect(0, 0, canvas3.width, canvas3.height);

//   snake.x += snake.dx;
//   snake.y += snake.dy;

//   if (snake.x < 0) {
//     snake.x = canvas3.width - grid;
//   } else if (snake.x >= canvas3.width) {
//     snake.x = 0;
//   }

//   if (snake.y < 0) {
//     snake.y = canvas3.height - grid;
//   } else if (snake.y >= canvas3.height) {
//     snake.y = 0;
//   }

//   snake.cells.unshift({ x: snake.x, y: snake.y });

//   if (snake.cells.length > snake.maxCells) {
//     snake.cells.pop();
//   }

//   context.fillStyle = "red";
//   context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

//   context.fillStyle = "green";
//   snake.cells.forEach((cell, index) => {
//     context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

//     if (cell.x === apple.x && cell.y === apple.y) {
//       snake.maxCells++;
//       apple.x = getRandomInt(0, 25) * grid;
//       apple.y = getRandomInt(0, 25) * grid;
//     }

//     for (let i = index + 1; i < snake.cells.length; i++) {
//       if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
//         snake.x = 160;
//         snake.y = 160;
//         snake.cells = [];
//         snake.maxCells = 4;
//         snake.dx = grid;
//         snake.dy = 0;
//         apple.x = getRandomInt(0, 25) * grid;
//         apple.y = getRandomInt(0, 25) * grid;
//       }
//     }
//   });
// }

// document.addEventListener("keydown", (e) => {
//   if (e.which === 37 && snake.dx === 0) {
//     snake.dx = -grid;
//     snake.dy = 0;
//   } else if (e.which === 38 && snake.dy === 0) {
//     snake.dy = -grid;
//     snake.dx = 0;
//   } else if (e.which === 39 && snake.dx === 0) {
//     snake.dx = grid;
//     snake.dy = 0;
//   } else if (e.which === 40 && snake.dy === 0) {
//     snake.dy = grid;
//     snake.dx = 0;
//   }
// });

// document.addEventListener("touchstart", (e) => {
//   const touch = e.touches[0];
//   const x = touch.clientX;
//   const y = touch.clientY;

//   if (x < canvas3.width / 2 && snake.dx === 0) {
//     snake.dx = -grid;
//     snake.dy = 0;
//   } else if (x > canvas3.width / 2 && snake.dx === 0) {
//     snake.dx = grid;
//     snake.dy = 0;
//   } else if (y < canvas3.height / 2 && snake.dy === 0) {
//     snake.dy = -grid;
//     snake.dx = 0;
//   } else if (y > canvas3.height / 2 && snake.dy === 0) {
//     snake.dy = grid;
//     snake.dx = 0;
//   }
// });

// requestAnimationFrame(loop);

// Pong
const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');
const resetBtn = document.getElementById('resetBtn'); // Select the reset button
const backButton = document.querySelector('.btn.btn-rabbit.back'); // Select the back button
const scoreCard = document.getElementById('scoreCard'); // Select the scorecard for displaying winner

const maxScore = 10; // Set max score for winning
const initialSpeed = 4; // Store the initial ball speed

// Ball object
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: initialSpeed, // Use the initial speed for the ball
  velocityX: 4,
  velocityY: 4,
  color: 'white',
};

// Paddle object
const paddleWidth = 10;
const paddleHeight = 100;

const user = {
  x: 0, // Left paddle
  y: (canvas.height - paddleHeight) / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: 'white',
  score: 0,
};

const computer = {
  x: canvas.width - paddleWidth, // Right paddle
  y: (canvas.height - paddleHeight) / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: 'white',
  score: 0,
};

// Net object
const net = {
  x: (canvas.width - 2) / 2,
  y: 0,
  width: 2,
  height: 10,
  color: 'white',
};

// Draw the net
function drawNet() {
  for (let i = 0; i <= canvas.height; i += 15) {
    context.fillStyle = net.color;
    context.fillRect(net.x, net.y + i, net.width, net.height);
  }
}

// Draw the paddle
function drawPaddle(x, y, width, height, color) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

// Draw the ball
function drawBall(x, y, radius, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
}

// Move the paddle
function movePaddle(event) {
  let rect = canvas.getBoundingClientRect();
  if (event.type === 'mousemove') {
    user.y = event.clientY - rect.top - user.height / 2;
  } else if (event.type === 'touchmove') {
    event.preventDefault(); // Prevent scrolling when touching canvas
    user.y = event.touches[0].clientY - rect.top - user.height / 2;
  }
}

// Reset the ball after a point and restore initial speed
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.velocityX = -ball.velocityX;
}

// Collision detection
function collision(b, p) {
  p.top = p.y;
  p.bottom = p.y + p.height;
  p.left = p.x;
  p.right = p.x + p.width;

  b.top = b.y - b.radius;
  b.bottom = b.y + b.radius;
  b.left = b.x - b.radius;
  b.right = b.x + b.radius;

  return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}

// Check if a player has won (reached 10 points)
function checkWinner() {
  if (user.score >= maxScore) {
    scoreCard.innerText = 'User wins with 10 points!';
    setTimeout(() => {
      resetGame();
    }, 2000); // Wait 2 seconds before resetting the game
  } else if (computer.score >= maxScore) {
    scoreCard.innerText = 'Computer wins with 10 points!';
    setTimeout(() => {
      resetGame();
    }, 2000); // Wait 2 seconds before resetting the game
  }
}

// Reset game, reset speed, and restart
function resetGame() {
  user.score = 0;
  computer.score = 0;
  ball.x = canvas.width / 2; // Reset ball position
  ball.y = canvas.height / 2; // Reset ball position
  ball.velocityX = initialSpeed; // Reset ball velocity to initial speed
  ball.velocityY = initialSpeed; // Reset ball velocity to initial speed
  ball.speed = initialSpeed; // Reset ball speed to the original speed
  scoreCard.innerText = ''; // Clear the scorecard
  gameInterval = setInterval(gameLoop, 1000 / fps); // Restart the game loop
}

// Function to go back to home and reset the game
function goToHome() {
  resetGame(); // Reset the game
  // Optionally add logic to navigate back to home, e.g.:
  // window.location.href = 'home.html'; // Navigate to home page
}

// Update game state
function update() {
  // Move the ball
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // AI for the computer paddle
  computer.y += (ball.y - (computer.y + computer.height / 2)) * 0.1;

  // Collision detection for top and bottom wall
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }

  // Check if the ball hit the user or computer paddle
  let player = (ball.x < canvas.width / 2) ? user : computer;
  if (collision(ball, player)) {
    // Normalize the angle
    let collidePoint = (ball.y - (player.y + player.height / 2)) / (player.height / 2);
    let angleRad = (Math.PI / 4) * collidePoint;

    // Direction of the ball after collision
    let direction = (ball.x < canvas.width / 2) ? 1 : -1;

    // Change velocity
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);

    // Increase ball speed
    ball.speed += 0.5;
  }

  // Check if the ball goes out of bounds (score)
  if (ball.x - ball.radius < 0) {
    computer.score++;
    resetBall();
    checkWinner();
  } else if (ball.x + ball.radius > canvas.width) {
    user.score++;
    resetBall();
    checkWinner();
  }
}

// Render the game objects
function render() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the net
  drawNet();

  // Draw the user and computer paddles
  drawPaddle(user.x, user.y, user.width, user.height, user.color);
  drawPaddle(computer.x, computer.y, computer.width, computer.height, computer.color);

  // Draw the ball
  drawBall(ball.x, ball.y, ball.radius, ball.color);

  // Draw the scores
  context.fillStyle = 'white';
  context.font = '35px Arial';
  context.fillText(user.score, canvas.width / 4, canvas.height / 5);
  context.fillText(computer.score, 3 * canvas.width / 4, canvas.height / 5);
}

// Game loop
function gameLoop() {
  update();
  render();
}

// Control the user paddle with mouse movement on desktop
canvas.addEventListener('mousemove', movePaddle);

// Control the user paddle with touch movement on mobile
canvas.addEventListener('touchmove', movePaddle, { passive: false }); // Set passive to false to allow preventDefault

// Run the game loop 60 times per second
const fps = 60;
let gameInterval = setInterval(gameLoop, 1000 / fps);

// Add event listeners
resetBtn.addEventListener('click', resetGame);
backButton.addEventListener('click', goToHome);
