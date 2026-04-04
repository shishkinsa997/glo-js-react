let start = null;
let running = false
const startBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const element = document.createElement("div");

startBtn.textContent = "Start";
resetBtn.textContent = "Reset";

element.style.width = "50px";
element.style.height = "50px";
element.style.background = "red";


function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  element.style.transform =
    "translateX(" + Math.min(progress / 10, 1000) + "px)";
  if (progress < 10000 && running) {
    window.requestAnimationFrame(step);
  }
}

document.body.append(element, startBtn, resetBtn);

startBtn.addEventListener("click", () => {
  running = true
  start = null;
  window.requestAnimationFrame(step);
});

resetBtn.addEventListener("click", () => {
  running = false
  start = null;
  element.style.transform = "translateX(0)";
})