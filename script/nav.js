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

  const currentLocation = location.href;
  let menuItem = document.querySelectorAll(".nav_links a");
  const menuLength = menuItem.length;

  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "active";
    }
  }

  // let menuItems = document.querySelectorAll(".nav_links a");

  // menuItems.forEach((menuItem) => {
  //   menuItem.addEventListener("click", function () {
  //     console.log("currentLocation");
  //     menuItems.forEach((a) => a.classList.remove("active"));
  //     this.classList.add("active");
  //   });
  // });
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
