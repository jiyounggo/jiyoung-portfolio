"use strict";

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

  const selected = document.querySelector(".navbar__menu__item.select");
  selected.classList.remove("select");
  event.target.classList.add("select");
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
adjustOpacity(about);
adjustOpacity(skill);
adjustOpacity(project);

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

//button 활성화 만들기

const navBtn = document.querySelector(".navbar__menu__item");

navBtn.addEventListener("click", () => {
  console.log("e");
});
