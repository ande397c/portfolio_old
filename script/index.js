"use strict";

window.addEventListener("load", setup);

function setup() {
  const arrow = document.querySelector(".arrow_splash");

  arrow.addEventListener("mouseover", changeAnimationSpeed);
  arrow.addEventListener("mouseout", changeAnimationSpeedBack);
}

function changeAnimationSpeed() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "paused";
}
function changeAnimationSpeedBack() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "running";
}
