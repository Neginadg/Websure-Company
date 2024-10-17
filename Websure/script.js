const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    boxes.forEach((b) => b.classList.remove("active-box"));

    box.classList.add("active-box");
  });
});
const translations = {
  tr: {
    nav_links1: "Ürünler",
    nav_links2: "Hakkımızda",
    nav_links3: "İletişim",
    hero_contentL1: "Sigorta İnovasyonunu",
  },
  en: {
    nav_links1: "Products",
    nav_links2: "About us",
    nav_links3: "Contact us",
    hero_contentL1: "We have been",
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
  document.querySelector(".hero_contentL1").innerHTML =
    translations[language].hero_contentL1;
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
