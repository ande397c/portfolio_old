"use strict";

window.addEventListener("load", ready);

const burger = document.querySelector(".burger");
const links = document.querySelector(".nav_links");

function ready() {
  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);

  burger.addEventListener("mouseout", done);
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", () => {
    location.replace("index.html");
  });
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
