const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    boxes.forEach((b) => b.classList.remove("active-box"));

    box.classList.add("active-box");
  });
});
const translations = {
  tr: {
    nav_links1: "Ana sayfa",
    nav_links2: "Ürünler",
    nav_links3: "Hakkımızda",
    nav_links4: "İletişim",
    hero_contentL1: "Sigorta İnovasyonunu",
    hero_contentL2: "8 Yıldır",
    hero_contentL3: "Güçlendiriyoruz",
  },
  en: {
    nav_links1: "Home",
    nav_links2: "Products",
    nav_links3: "About us",
    nav_links4: "Contact us",
    hero_contentL1: "Insurance innovation",
    hero_contentL2: "For 8 years",
    hero_contentL3: "And still going",
  },
};

let currentLanguage = "tr";

function updateContent(language) {
  document.querySelector(".nav_links1").innerHTML =
    translations[language].nav_links1;
  document.querySelector(".nav_links2").innerHTML =
    translations[language].nav_links2;
  document.querySelector(".nav_links3").innerHTML =
    translations[language].nav_links3;
  document.querySelector(".nav_links4").innerHTML =
    translations[language].nav_links4;
  document.querySelector(".hero_contentL1").innerHTML =
    translations[language].hero_contentL1;
  document.querySelector(".hero_contentL2").innerHTML =
    translations[language].hero_contentL2;
  document.querySelector(".hero_contentL3").innerHTML =
    translations[language].hero_contentL3;
}

document.getElementById("turkish-btn").addEventListener("click", () => {
  currentLanguage = "tr";
  updateContent("tr");
});

document.getElementById("english-btn").addEventListener("click", () => {
  currentLanguage = "en";
  updateContent("en");
});
updateContent(currentLanguage);

// Select all elements with the 'fade-in' class
const faders = document.querySelectorAll(".fade-in");
const slider_right = document.querySelectorAll(".slide-in-right");
const slider_left = document.querySelectorAll(".slide-in-left");

// Create an Intersection Observer
const appearOptions = {
  threshold: 0.1, // Trigger animation when 10% of the element is visible
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible"); // Add visible class when the element comes into view
    observer.unobserve(entry.target); // Stop observing once the animation is triggered
  });
}, appearOptions);

// Observe each 'fade-in' element
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

slider_right.forEach((slider) => {
  appearOnScroll.observe(slider);
});

slider_left.forEach((slider) => {
  appearOnScroll.observe(slider);
});
