"use strict";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", setup);

function setup() {
  const arrow = document.querySelector(".arrow_splash");

  arrow.addEventListener("mouseover", changeAnimationSpeed);
  arrow.addEventListener("mouseout", changeAnimationSpeedBack);

  window.addEventListener("scroll", scrolling);

  addAnimations();
}

function addAnimations() {
  // Animation nav

  gsap.from(".nav_container", { scrollTrigger: ".nav_container", delay: 0.2, duration: 1, y: "-20rem", ease: Cubic.easeOut, stagger: { amount: 0.5 } });

  // Animation header
  gsap.from(".h1_container", { scrollTrigger: ".h1_container", delay: 0.3, duration: 1, x: "100rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "random" } });

  // Animation Card / work
  gsap.from(".card", { scrollTrigger: ".card", duration: 0.6, delay: 1, y: "30rem", opacity: 0, ease: Cubic.easeOut, stagger: { amount: 0.7, from: "end", axis: "y" } });

  // Animation about intro
  gsap.from("#about_intro", { scrollTrigger: "#about_intro", duration: 0.4, delay: 1, opacity: 0, y: "30rem", ease: Cubic.easeOut, stagger: { amount: 0.7 } });
}

function changeAnimationSpeed() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "paused";
  const circles = document.querySelectorAll(".circles li");
  circles.forEach((circle) => {
    circle.style.animationPlayState = "paused";
  });
}
function changeAnimationSpeedBack() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "running";
  const circles = document.querySelectorAll(".circles li");
  circles.forEach((circle) => {
    circle.style.animationPlayState = "running";
  });
}

function scrolling() {
  const myID = document.querySelector("#customID");
  let y = window.scrollY;

  if (y >= 850 || y >= 2100) {
    myID.className = "cta show";
  }
  if (y <= 1000) {
    myID.className = "cta hide";
  }

  myID.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}
