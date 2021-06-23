// Carousel
const carouselSlide = document.querySelector(".sponsor__text");
const carouselCards = document.querySelectorAll(".sponsor__container");

// Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// Counter
let counter = 1;
let cardSize = 100;

carouselSlide.style.transform = "translateX(" + -cardSize * counter + "%)";

// Button listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselCards.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -cardSize * counter + "%)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -cardSize * counter + "%)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselCards[counter].id == "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselCards.length - 2;
    carouselSlide.style.transform = "translateX(" + -cardSize * counter + "%)";
  }

  if (carouselCards[counter].id == "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselCards.length - counter;
    carouselSlide.style.transform = "translateX(" + -cardSize * counter + "%)";
  }
});

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

// Sponsor section open/close bio-highlights description
// Navigation buttons

// Laura Rogora Sponsor
const lauraNavigationBtns = document.querySelectorAll("#laura-rogora button");
lauraNavigationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentSponsor = btn.dataset.modalTarget;
    let shownText = document.querySelector("#laura-rogora .show");
    let divToOpen = document.getElementById(currentSponsor);
    const activeBtn = document.querySelector("#laura-rogora button.active");
    if (activeBtn.id !== btn.id) {
      activeBtn.classList.remove("active");
      btn.classList.add("active");
    } else {
      return;
    }

    if (divToOpen.id !== shownText.id) {
      shownText.classList.remove("show");
      divToOpen.classList.add("show");
    } else {
      return;
    }
  });
});

// Navigation mid section
const navBtns = document.querySelectorAll(".mid-section .nav-text");

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Give active status to button
    let activeNavBtn = document.querySelector(".mid-section .nav-text.active");
    activeNavBtn.classList.remove("active");
    btn.classList.add("active");

    // Give visible class to text
    let visibleText = document.querySelector(
      ".mid-section .infra__text .visible"
    );
    visibleText.classList.remove("visible");
    let _id = e.target.getAttribute("dataset");
    let targetText = document.getElementById(_id);
    targetText.classList.add("visible");
  });
});

// closeModalBtns.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// // Open modal
// function openModal(modal) {
//   if (modal == null) return;
//   overlay.classList.add("active");
//   modal.classList.add("active");
// }

// // Close modal
// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }

// Modal for wood types
// Modal opening and closing
// const openModalBtn = document.getElementById("woods__btn");
// const woodsModal = document.getElementById("woods");
// const closeModalBtn = document.querySelector("[data-close-button]");
// const overlay = document.querySelector(".overlay");

// openModalBtn.addEventListener("click", () => {
//   openModal(woodsModal);
// });

// closeModalBtn.addEventListener("click", (e) => {
//   const modal = e.target.closest(".modal");
//   closeModal(modal);
// });

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// // Open modal
// function openModal(modal) {
//   if (modal == null) return;
//   overlay.classList.add("active");
//   modal.classList.add("active");
// }

// // Close modal
// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }

// // Change selection of woods btns
// const modalTitle = document.querySelector(".modal__title h2");
// const modalImage = document.getElementById("wood__img");
// const modalText = document.querySelector(".modal__text");

// // Pic animation on hover
// modalImage.addEventListener("mousemove", (e) => {
//   modalImage.style.backgroundPositionX =
//     "calc(125px + " + -e.offsetX * 0.5 + "px)";
//   modalImage.style.backgroundPositionY =
//     "calc(50px + " + -e.offsetY * 0.5 + "px)";
// });

// modalImage.addEventListener("mouseleave", (e) => {
//   modalImage.style.backgroundPositionX = "0px";
//   modalImage.style.backgroundPositionY = "0px";
// });

// // palissandro
// const palissandroBtn = document.getElementById("palissandro");
// palissandroBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   palissandroBtn.classList.add("active");
//   modalTitle.textContent = "Palissandro Santos";
//   modalText.innerHTML = "<p>Palissandro is a very light wood bla bla bla</p>";
//   modalImage.style.backgroundImage =
//     "url(./images/wood_types/palissandro.jpeg)";
// });

// // ebano
// const ebanoBtn = document.getElementById("ebano");
// ebanoBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   ebanoBtn.classList.add("active");
//   modalTitle.textContent = "Ebano Africano";
//   modalText.innerHTML = "<p>Ebony is a very dark wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/ebony.jpeg)";
// });

// // Padouk
// const padoukBtn = document.getElementById("padouk");
// padoukBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   padoukBtn.classList.add("active");
//   modalTitle.textContent = "Padouk";
//   modalText.innerHTML = "<p>Padouk is a very amber wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/padouk.jpeg)";
// });

// // Pao Rosa
// const paoBtn = document.getElementById("pao");
// paoBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   paoBtn.classList.add("active");
//   modalTitle.textContent = "Pao Rosa";
//   modalText.innerHTML = "<p>Pao Rosa is a very pinky wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/pao-rosa.jpeg)";
// });

// // Amaranto
// const amarantoBtn = document.getElementById("amaranto");
// amarantoBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   amarantoBtn.classList.add("active");
//   modalTitle.textContent = "Amaranto";
//   modalText.innerHTML = "<p>Amaranto is a red wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/amaranto.jpeg)";
// });

// // Zebrano
// const zebranoBtn = document.getElementById("zebrano");
// zebranoBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   zebranoBtn.classList.add("active");
//   modalTitle.textContent = "Zebrano";
//   modalText.innerHTML = "<p>Zebrano is a red wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/zebrano.jpeg)";
// });

// // Wengè
// const wengeBtn = document.getElementById("wenge");
// wengeBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   wengeBtn.classList.add("active");
//   modalTitle.textContent = "Wengè";
//   modalText.innerHTML = "<p>Wengè is a red wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/wenge.jpeg)";
// });

// // Ziricote
// const ziricoteBtn = document.getElementById("ziricote");
// ziricoteBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   ziricoteBtn.classList.add("active");
//   modalTitle.textContent = "Ziricote";
//   modalText.innerHTML = "<p>Ziricote is a red wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/ziricote.jpeg)";
// });

// // Palma
// const palmaBtn = document.getElementById("palma");
// palmaBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   palmaBtn.classList.add("active");
//   modalTitle.textContent = "Palma";
//   modalText.innerHTML = "<p>Palma is a red wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/palma.jpeg)";
// });

// // Ulivo
// const ulivoBtn = document.getElementById("ulivo");
// ulivoBtn.addEventListener("click", (e) => {
//   let activeBtns = document.querySelectorAll(".modal__options .active");
//   activeBtns.forEach((button) => button.classList.remove("active"));
//   ulivoBtn.classList.add("active");
//   modalTitle.textContent = "Ulivo";
//   modalText.innerHTML = "<p>Ulivo is a red wood bla bla bla</p>";
//   modalImage.style.backgroundImage = "url(./images/wood_types/ulivo.jpeg)";
// });
