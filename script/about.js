"use strict";

window.addEventListener("load", ready);

const burger = document.querySelector(".burger");
const links = document.querySelector(".nav_links");

function ready() {
  window.addEventListener("scroll", toggleNav);

  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);

  burger.addEventListener("mouseout", done);
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", () => {
    location.replace("index.html");
  });

  const currentLocation = location.href;
  let menuItem = document.querySelectorAll(".nav_links a");
  const menuLength = menuItem.length;

  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "active";
    }
  }

  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", removeOverflow);
  }

  addAnimations();
}

function addAnimations() {
  gsap.from(".text", { duration: 1, x: "-100rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "end" } });
  gsap.from(".about_img_container", { delay: 0.3, duration: 1, x: "100rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "end" } });

  gsap.from(".skill-circle", { scrollTrigger: ".skill-circle", delay: 0.1, duration: 0.5, y: "20rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "end" } });
}

function toggleNav() {
  let windowY = window.scrollY;
  const header = document.querySelector(".nav_container");

  if (windowY >= 800) {
    header.classList.add("sticky", "toggle_nav");
  } else {
    header.classList.remove("sticky", "toggle_nav");
  }
}

function toggle() {
  if (burger.classList.contains("toggle")) {
    burger.addEventListener("mouseover", over);
    document.body.style.overflowY = "visible";
  } else {
    burger.removeEventListener("mouseover", over);
    document.body.style.overflow = "hidden";
  }
  links.classList.toggle("nav_toggle");
  burger.classList.toggle("toggle");
}

function over() {
  burger.classList.add("hover");
}
function done() {
  burger.classList.remove("hover");
}

function removeOverflow() {
  document.body.style.overflowY = "visible";
  links.classList.remove("nav_toggle");
  burger.classList.remove("toggle");
}
