"use strict";

// get elements from the DOM
const hamBtn = document.querySelector(".hamburger-link");
const sidebar = document.querySelector(".side-navbar");
const exitBtn = document.querySelector(".exit-link");
const overlay = document.querySelector(".overlay");
const sideLogo = document.querySelector(".side-logo");
const body = document.querySelector("body");

// event listeners
// show sidebar
hamBtn.addEventListener("click", showSidebar);
function showSidebar(e) {
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    overlay.classList.remove("hidden");
    body.style.overflow = "hidden";
  }
}

// hide sidebar
exitBtn.addEventListener("click", closeSidebar);
function closeSidebar(e) {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "visible";
}

overlay.addEventListener("click", closeSidebar);

sideLogo.addEventListener("click", closeSidebar);
