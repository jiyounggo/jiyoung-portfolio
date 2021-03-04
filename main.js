"use strict";
// name typing animation
const typingBool = false;
let typingIdx = 0;
const nameTyping = document.querySelector(".home__title").innerText;
const cursorTyping = document.querySelector("#typing");
const typingName = nameTyping.split("");
let typingInt = setInterval(typing, 100);

// console.log(cursorTyping);

if (typingBool === false) {
  typingBool == true;
}

function typing() {
  if (typingIdx < typingName.length) {
    $("#typing").append(typingName[typingIdx - 1]);

    typingIdx++;
    console.log(typingName[typingIdx - 1]);
  } else {
    clearInterval(typingInt);
  }
}

// navbar animation

const navbar = document.querySelector("#navbar");
const navbarLogo = document.querySelector(".navbar__logo__name");
const navbarBtn = document.querySelector(".navbar__toggle-btn");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
    navbarLogo.classList.add("navbar--dark");
    navbarBtn.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
    navbarLogo.classList.remove("navbar--dark");
    navbarBtn.classList.remove("navbar--dark");
  }
});

// navbar tap scroll , navbar click css

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//contact btn scroll

const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scroll = document.querySelector(selector);
  scroll.scrollIntoView({ behavior: "smooth" });
}

// scroll 투명도

const home = document.querySelector(".home__container");
const about = document.querySelector(".about__container");
const skill = document.querySelector(".skill__container");
const project = document.querySelector(".project__container");

adjustOpacity(home);

function adjustOpacity(element) {
  document.addEventListener("scroll", () => {
    const offsetBottom = element.offsetTop + element.offsetHeight;
    if (window.scrollY < offsetBottom && window.scrollY > element.offsetTop) {
      element.style.opacity = element.offsetTop / window.scrollY;
    } else {
      element.style.opacity = 1;
    }
  });
}

// backbtn scroll event
const backBtn = document.querySelector(".backBtn");
backBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});
document.addEventListener("scroll", () => {
  const homeHeight = home.getBoundingClientRect().height;
  if (window.scrollY > homeHeight / 2) {
    backBtn.classList.add("active");
  } else {
    backBtn.classList.remove("active");
  }
});

// skill animation
function gageNone(element) {
  element.style.opacity = 0;
}
function gageStyle(element) {
  element.style.opacity = 1;
}

document.addEventListener("scroll", () => {
  const skillHeight = skill.getBoundingClientRect().height;

  const skillGageHtml = document.querySelector(".skill__bar__gauge.html");
  const skillGageCss = document.querySelector(".skill__bar__gauge.css");
  const skillGageJs = document.querySelector(".skill__bar__gauge.javascript");
  const skillGageReact = document.querySelector(".skill__bar__gauge.react");
  const skillGageNode = document.querySelector(".skill__bar__gauge.node");
  const skillGageBoot = document.querySelector(".skill__bar__gauge.boot");
  if (window.scrollY > skillHeight) {
    gageStyle(skillGageReact);
    gageStyle(skillGageHtml);
    gageStyle(skillGageCss);
    gageStyle(skillGageJs);
    gageStyle(skillGageNode);
    gageStyle(skillGageBoot);
  } else {
    gageNone(skillGageReact);
    gageNone(skillGageHtml);
    gageNone(skillGageCss);
    gageNone(skillGageJs);
    gageNone(skillGageNode);
    gageNone(skillGageBoot);
  }
});
