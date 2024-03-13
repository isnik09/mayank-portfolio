"use strict";
const bodyDiv = document.getElementById("body");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const workLink = document.getElementById("work-link");
const certificationsLink = document.getElementById("certifications-link");

const aboutDiv = document.getElementById("about");
const workDiv = document.getElementById("work");
const certificationsDiv = document.getElementById("certifications");

// Toggle Items
aboutLink.addEventListener("click", toggleAbout);
workLink.addEventListener("click", toggleWork);
certificationsLink.addEventListener("click", toggleCertifications);

// Scroll to the bottom of the page
contactLink.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});

window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;
  if (scroll > 20) {
    this.document.getElementById("nav").classList.add("topbar-bg");
  } else {
    this.document.getElementById("nav").classList.remove("topbar-bg");
  }
});

// DARK MODE
let checkBox = document.getElementById("dark-mode");

function toggleDark() {
  if (checkBox.checked == true) {
    bodyDiv.classList.remove("dark");
    bodyDiv.classList.add("light");
  } else {
    bodyDiv.classList.remove("light");
    bodyDiv.classList.add("dark");
  }
}

// PAGE URL

function openWebPage(url) {
  window.open(url, "_blank");
}

// Autometing dark mode
let d = new Date();
const currentHour = d.getHours();
if (currentHour >= 6 && currentHour <= 18) {
  bodyDiv.classList.remove("dark");
  bodyDiv.classList.add("light");
  checkBox.checked = true;
} else {
  bodyDiv.classList.add("dark");
  bodyDiv.classList.remove("light");
  checkBox.checked = false;
}

// fetcher
const box = document.getElementById("main-content");
function loadPage(webpage) {
  document.scrollingElement.scroll(0, 1);
  fetch(`./Pages/${webpage}.html`)
    .then((response) => response.text())
    .then((html) => {
      box.innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

function toggleAbout() {
  workLink.classList.remove("link-active");
  certificationsLink.classList.remove("link-active");
  aboutLink.classList.add("link-active");
  loadPage(`about`);
}

function toggleWork() {
  certificationsLink.classList.remove("link-active");
  workLink.classList.add("link-active");
  aboutLink.classList.remove("link-active");
  loadPage(`work`);
}

function toggleCertifications() {
  certificationsLink.classList.add("link-active");
  workLink.classList.remove("link-active");
  aboutLink.classList.remove("link-active");
  loadPage(`certifications`);
}

toggleWork();
