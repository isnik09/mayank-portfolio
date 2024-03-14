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

// loadPage(`Projects/coffee`);

// var observer = new MutationObserver(function (mutations) {
//   mutations.forEach(function (mutation) {
//     // Check if new nodes have been added
//     if (mutation.addedNodes && mutation.addedNodes.length > 0) {
//       // Loop through added nodes
//       mutation.addedNodes.forEach(function (node) {
//         // Check if the added node is the one you're interested in (example: a div)
//         if (node.nodeName === "DIV" && node.id === "myIFrame") {
//           // Your logic here for elements within the dynamically loaded div
//           alert("New div added:", node);
//         }
//       });
//     }
//   });
// });

// // Start observing changes in the container div
// observer.observe(document.getElementById("main-content"), {
//   childList: true, // Observe changes to the child nodes (i.e., when new nodes are added)
//   subtree: true, // Observe changes in the subtree (i.e., all descendant nodes)
// });

// OPENING IN NEW URL

function openInNewURL(webpage) {
  // window.open(`./Pages/${webpage}.html`);
  location.replace(`${webpage}.html`);
}

function goBack() {
  location.replace("index.html");
}
// openInNewURL(`multi-language-invoice-extractor`);