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
    nav_links1: "Products",
    nav_links2: "About us",
    nav_links3: "Contact us",
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
