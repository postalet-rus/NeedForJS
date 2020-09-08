const score = document.querySelector(".score"),
  start = document.querySelector(".start"),
  gameArea = document.querySelector(".game-area"),
  car = document.createElement("div");

car.classList.add("car");

start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun)

const setting = {
  start: false,
  score: 0,
  speed: 3
};

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false
};

function startGame() {
  start.classList.add("hide");
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  if(setting.start === true){
    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
}

function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
}