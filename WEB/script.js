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
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };

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

////////////////////////////////////////
// FLAPPY BIRD

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// some variables
var gap = 85;
var constant;
var bX = 10;
var bY = 150;
var gravity = 1.5;
var score = 0;

// audio files
var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// on key down
document.addEventListener("keydown", moveUp);

function moveUp() {
  bY -= 25;

  fly.play();
}

// pipe coordinates
var pipe = [];

pipe[0] = {
  x: cvs.width,

  y: 0,
};

// draw images
function draw() {
  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    constant = pipeNorth.height + gap;

    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
      });
    }

    // detect collision
    if (
      (bX + bird.width >= pipe[i].x &&
        bX <= pipe[i].x + pipeNorth.width &&
        (bY <= pipe[i].y + pipeNorth.height ||
          bY + bird.height >= pipe[i].y + constant)) ||
      bY + bird.height >= cvs.height - fg.height
    ) {
      location.reload(); // reload the page
    }

    if (pipe[i].x == 5) {
      score++;
      scor.play();
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, bX, bY);

  bY += gravity;
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score, 10, cvs.height - 20);
  requestAnimationFrame(draw);
}

draw();

///////////////////////////////////
// SNAKES AND LADDERS


///////////////////////////////////////////////////////
// WIFFWAFF

  // Global Variables
var DIRECTION = {
  IDLE: 0,
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4
};

var rounds = [5, 5, 3, 3, 2];
var colors = ['#1abc9c', '#2ecc71', '#3498db', '#e74c3c', '#9b59b6'];

// The ball object (The cube that bounces back and forth)
var Ball = {
  new: function (incrementedSpeed) {
    return {
      width: 18,
      height: 18,
      x: (this.canvas.width / 2) - 9,
      y: (this.canvas.height / 2) - 9,
      moveX: DIRECTION.IDLE,
      moveY: DIRECTION.IDLE,
      speed: incrementedSpeed || 9
    };
  }
};

// The paddle object (The two lines that move up and down)
var Paddle = {
  new: function (side) {
    return {
      width: 18,
      height: 70,
      x: side === 'left' ? 150 : this.canvas.width - 150,
      y: (this.canvas.height / 2) - 35,
      score: 0,
      move: DIRECTION.IDLE,
      speed: 10
    };
  }
};

var Game = {
  initialize: function () {
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d');

    this.canvas.width = 1400;
    this.canvas.height = 1000;

    this.canvas.style.width = (this.canvas.width / 2) + 'px';
    this.canvas.style.height = (this.canvas.height / 2) + 'px';

    this.player = Paddle.new.call(this, 'left');
    this.paddle = Paddle.new.call(this, 'right');
    this.ball = Ball.new.call(this);

    this.paddle.speed = 8;
    this.running = this.over = false;
    this.turn = this.paddle;
    this.timer = this.round = 0;
    this.color = '#2c3e50';

    Pong.menu();
    Pong.listen();
  },

  endGameMenu: function (text) {
    // Change the canvas font size and color
    Pong.context.font = '50px Courier New';
    Pong.context.fillStyle = this.color;

    // Draw the rectangle behind the 'Press any key to begin' text.
    Pong.context.fillRect(
      Pong.canvas.width / 2 - 350,
      Pong.canvas.height / 2 - 48,
      700,
      100
    );

    // Change the canvas color;
    Pong.context.fillStyle = '#ffffff';

    // Draw the end game menu text ('Game Over' and 'Winner')
    Pong.context.fillText(text,
      Pong.canvas.width / 2,
      Pong.canvas.height / 2 + 15
    );

    setTimeout(function () {
      Pong = Object.assign({}, Game);
      Pong.initialize();
    }, 3000);
  },

  menu: function () {
    // Draw all the Pong objects in their current state
    Pong.draw();

    // Change the canvas font size and color
    this.context.font = '50px Arial';
    this.context.fillStyle = this.color;

    // Draw the rectangle behind the 'Press any key to begin' text.
    this.context.fillRect(
      this.canvas.width / 2 - 350,
      this.canvas.height / 2 - 48,
      700,
      100
    );

    // Change the canvas color;
    this.context.fillStyle = '#ffffff';

    // Draw the 'press any key to begin' text
    this.context.fillText('Press any key to begin',
      this.canvas.width / 2,
      this.canvas.height / 2 + 15
    );
  },

  // Update all objects (move the player, paddle, ball, increment the score, etc.)
  update: function () {
    if (!this.over) {
      // If the ball collides with the bound limits - correct the x and y coords.
      if (this.ball.x <= 0) Pong._resetTurn.call(this, this.paddle, this.player);
      if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, this.player, this.paddle);
      if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
      if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = DIRECTION.UP;

      // Move player if they player.move value was updated by a keyboard event
      if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
      else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;

      // On new serve (start of each turn) move the ball to the correct side
      // and randomize the direction to add some challenge.
      if (Pong._turnDelayIsOver.call(this) && this.turn) {
        this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
        this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())];
        this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
        this.turn = null;
      }

      // If the player collides with the bound limits, update the x and y coords.
      if (this.player.y <= 0) this.player.y = 0;
      else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);

      // Move ball in intended direction based on moveY and moveX values
      if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
      else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
      if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
      else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;

      // Handle paddle (AI) UP and DOWN movement
      if (this.paddle.y > this.ball.y - (this.paddle.height / 2)) {
        if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y -= this.paddle.speed / 1.5;
        else this.paddle.y -= this.paddle.speed / 4;
      }
      if (this.paddle.y < this.ball.y - (this.paddle.height / 2)) {
        if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y += this.paddle.speed / 1.5;
        else this.paddle.y += this.paddle.speed / 4;
      }

      // Handle paddle (AI) wall collision
      if (this.paddle.y >= this.canvas.height - this.paddle.height) this.paddle.y = this.canvas.height - this.paddle.height;
      else if (this.paddle.y <= 0) this.paddle.y = 0;

      // Handle Player-Ball collisions
      if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
        if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
          this.ball.x = (this.player.x + this.ball.width);
          this.ball.moveX = DIRECTION.RIGHT;

          beep1.play();
        }
      }

      // Handle paddle-ball collision
      if (this.ball.x - this.ball.width <= this.paddle.x && this.ball.x >= this.paddle.x - this.paddle.width) {
        if (this.ball.y <= this.paddle.y + this.paddle.height && this.ball.y + this.ball.height >= this.paddle.y) {
          this.ball.x = (this.paddle.x - this.ball.width);
          this.ball.moveX = DIRECTION.LEFT;

          beep1.play();
        }
      }
    }

    // Handle the end of round transition
    // Check to see if the player won the round.
    if (this.player.score === rounds[this.round]) {
      // Check to see if there are any more rounds/levels left and display the victory screen if
      // there are not.
      if (!rounds[this.round + 1]) {
        this.over = true;
        setTimeout(function () { Pong.endGameMenu('Winner!'); }, 1000);
      } else {
        // If there is another round, reset all the values and increment the round number.
        this.color = this._generateRoundColor();
        this.player.score = this.paddle.score = 0;
        this.player.speed += 0.5;
        this.paddle.speed += 1;
        this.ball.speed += 1;
        this.round += 1;

        beep3.play();
      }
    }
    // Check to see if the paddle/AI has won the round.
    else if (this.paddle.score === rounds[this.round]) {
      this.over = true;
      setTimeout(function () { Pong.endGameMenu('Game Over!'); }, 1000);
    }
  },

  // Draw the objects to the canvas element
  draw: function () {
    // Clear the Canvas
    this.context.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    // Set the fill style to black
    this.context.fillStyle = this.color;

    // Draw the background
    this.context.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

    // Set the fill style to white (For the paddles and the ball)
    this.context.fillStyle = '#ffffff';

    // Draw the Player
    this.context.fillRect(
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height
    );

    // Draw the Paddle
    this.context.fillRect(
      this.paddle.x,
      this.paddle.y,
      this.paddle.width,
      this.paddle.height
    );

    // Draw the Ball
    if (Pong._turnDelayIsOver.call(this)) {
      this.context.fillRect(
        this.ball.x,
        this.ball.y,
        this.ball.width,
        this.ball.height
      );
    }

    // Draw the net (Line in the middle)
    this.context.beginPath();
    this.context.setLineDash([7, 15]);
    this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
    this.context.lineTo((this.canvas.width / 2), 140);
    this.context.lineWidth = 10;
    this.context.strokeStyle = '#ffffff';
    this.context.stroke();

    // Set the default canvas font and align it to the center
    this.context.font = '100px Courier New';
    this.context.textAlign = 'center';

    // Draw the players score (left)
    this.context.fillText(
      this.player.score.toString(),
      (this.canvas.width / 2) - 300,
      200
    );

    // Draw the paddles score (right)
    this.context.fillText(
      this.paddle.score.toString(),
      (this.canvas.width / 2) + 300,
      200
    );

    // Change the font size for the center score text
    this.context.font = '30px Courier New';

    // Draw the winning score (center)
    this.context.fillText(
      'Round ' + (Pong.round + 1),
      (this.canvas.width / 2),
      35
    );

    // Change the font size for the center score value
    this.context.font = '40px Courier';

    // Draw the current round number
    this.context.fillText(
      rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
      (this.canvas.width / 2),
      100
    );
  },

  loop: function () {
    Pong.update();
    Pong.draw();

    // If the game is not over, draw the next frame.
    if (!Pong.over) requestAnimationFrame(Pong.loop);
  },

  listen: function () {
    document.addEventListener('keydown', function (key) {
      // Handle the 'Press any key to begin' function and start the game.
      if (Pong.running === false) {
        Pong.running = true;
        window.requestAnimationFrame(Pong.loop);
      }

      // Handle up arrow and w key events
      if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;

      // Handle down arrow and s key events
      if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
    });

    // Stop the player from moving when there are no keys being pressed.
    document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
  },

  // Reset the ball location, the player turns and set a delay before the next round begins.
  _resetTurn: function(victor, loser) {
    this.ball = Ball.new.call(this, this.ball.speed);
    this.turn = loser;
    this.timer = (new Date()).getTime();

    victor.score++;
    beep2.play();
  },

  // Wait for a delay to have passed after each turn.
  _turnDelayIsOver: function() {
    return ((new Date()).getTime() - this.timer >= 1000);
  },

  // Select a random color as the background of each level/round.
  _generateRoundColor: function () {
    var newColor = colors[Math.floor(Math.random() * colors.length)];
    if (newColor === this.color) return Pong._generateRoundColor();
    return newColor;
  }
};

var Pong = Object.assign({}, Game);
Pong.initialize();