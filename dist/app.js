// Open Hamburger menu
const hamburger = document.querySelector(".hamburger");
const exitHamburger = document.querySelector(".exit-mobile-nav");
const links = document.querySelector(".mobile__nav-links");
const allLinks = document.querySelectorAll(".mobile__nav-links li");

hamburger.addEventListener("click", () => {
  links.classList.add("open");
});

exitHamburger.addEventListener("click", () => {
  links.classList.remove("open");
});

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
  });
});

// Change language
const englishBtn = document.getElementById("english");
const italianBtn = document.getElementById("italian");

englishBtn.addEventListener("click", (e) => {
  e.target.classList.add("active");
  italianBtn.classList.remove("active");
  document.body.classList.add("en");
  document.body.classList.remove("it");
});

italianBtn.addEventListener("click", (e) => {
  e.target.classList.add("active");
  englishBtn.classList.remove("active");
  document.body.classList.add("it");
  document.body.classList.remove("en");
});

// Modal for single brushes
{
  // Mello Brush
  const allBtns = document.querySelectorAll("#mello-modal button");
  const imagePath = "images/mello_colors/";
  const imageCard = document.getElementById("mello__img");
  allBtns.forEach((button) =>
    button.addEventListener("click", () => {
      imageCard.src = imagePath + button.id + ".jpg";
    })
  );
}

{
  // Font Brush
  const allBtns = document.querySelectorAll("#font-modal button");
  const imagePath = "images/font_colors/";
  const imageCard = document.getElementById("font__img");
  allBtns.forEach((button) =>
    button.addEventListener("click", () => {
      if (button.id !== "fontBrush") {
        imageCard.src = imagePath + button.id + ".png";
      } else {
        imageCard.src = imagePath + button.id + ".jpeg";
      }
    })
  );
}

// Modal opening and closing
const openModalBtns = document.querySelectorAll(
  ".product__cards [data-modal-target]"
);

// const closeModalBtns = document.querySelectorAll("[data-close-button]");
// const overlay = document.querySelector(".overlay");

openModalBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const openOptions = document.querySelectorAll(".nut__options.show");
    openOptions.forEach((opt) => {
      if (button.dataset.modalTarget != "#" + opt.id) {
        opt.classList.remove("show");
      }
    });
    const modal = document.querySelector(button.dataset.modalTarget);
    modal.classList.toggle("show");
  });
});

// Navigation mid section
const navBtns = document.querySelectorAll(".mid-section .nav-text");
const firstMidTextEng = document.getElementById("first");
const firstMidTextIt = document.getElementById("first-it");
const secondMidTextEng = document.getElementById("second");
const secondMidTextIt = document.getElementById("second-it");
const thirdMidTextEng = document.getElementById("third");
const thirdMidTextIt = document.getElementById("third-it");

function makeInvisible() {
  let arr = [
    firstMidTextIt,
    firstMidTextEng,
    secondMidTextIt,
    secondMidTextEng,
    thirdMidTextIt,
    thirdMidTextEng,
  ];
  return arr.forEach((item) => item.classList.remove("visible"));
}

function makeVisible(item) {
  item.classList.add("visible");
}

function activateBtn(target) {
  navBtns.forEach((btn) => {
    if (btn == target) return;
    btn.classList.remove("active");
    target.classList.add("active");
  });
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let currentLang = document.body.getAttribute("class");
    let dataset = e.target.getAttribute("dataset");
    let visible;
    switch (dataset) {
      case "first":
        activateBtn(e.target);
        makeInvisible();
        visible = currentLang == "it" ? firstMidTextIt : firstMidTextEng;
        return makeVisible(visible);
      case "second":
        activateBtn(e.target);
        makeInvisible();
        visible = currentLang == "it" ? secondMidTextIt : secondMidTextEng;
        return makeVisible(visible);
      case "third":
        activateBtn(e.target);
        makeInvisible();
        visible = currentLang == "it" ? thirdMidTextIt : thirdMidTextEng;
        return makeVisible(visible);
    }
  });
});

// Lazy loading with Intersection Observer
let options = {
  root: null,
  rootMargin: "80px",
  threshold: 0.2,
};

let observer = new IntersectionObserver(showSection, options);

function showSection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      //console.log(entry.target);
      observer.unobserve(entry.target);
    }
  });
}

document.querySelectorAll("[data-load]").forEach((section) => {
  if (section) {
    observer.observe(section);
  }
});

// masonry for wallpaper
// var elem = document.querySelector(".poster__grid");
// var msnry = new Masonry(elem, {
//   // options
//   itemSelector: ".poster",
//   columnWidth: 250,
// });
