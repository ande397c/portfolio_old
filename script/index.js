"use strict";

window.addEventListener("load", setup);

function setup() {
  const arrow = document.querySelector(".arrow_splash");

  arrow.addEventListener("mouseover", changeAnimationSpeed);
  arrow.addEventListener("mouseout", changeAnimationSpeedBack);

  window.addEventListener("scroll", scrolling);
}

function changeAnimationSpeed() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "paused";
}
function changeAnimationSpeedBack() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "running";
}

function scrolling() {
  const myID = document.querySelector("#customID");
  let y = window.scrollY;

  if (y >= 700 || y >= 2100) {
    myID.className = "cta show";
  } else {
    myID.className = "cta hide";
  }

  myID.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}
