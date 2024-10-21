// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
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

    // Add null checks for hero content elements
    const heroContent1 = document.querySelector(".hero_contentL1");
    const heroContent2 = document.querySelector(".hero_contentL2");
    const heroContent3 = document.querySelector(".hero_contentL3");

    if (heroContent1)
      heroContent1.innerHTML = translations[language].hero_contentL1;
    if (heroContent2)
      heroContent2.innerHTML = translations[language].hero_contentL2;
    if (heroContent3)
      heroContent3.innerHTML = translations[language].hero_contentL3;
  }

  document.getElementById("turkish-btn").addEventListener("click", () => {
    currentLanguage = "tr";
    updateContent("tr");
  });

  document.getElementById("english-btn").addEventListener("click", () => {
    currentLanguage = "en";
    updateContent("en");
  });

  // Initialize content
  updateContent(currentLanguage);

  // Animation logic
  const faders = document.querySelectorAll(".fade-in");
  const slider_right = document.querySelectorAll(".slide-in-right");
  const slider_left = document.querySelectorAll(".slide-in-left");

  // Create an Intersection Observer with improved options
  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  // Trigger initial animation for elements already in view
  const triggerInitialAnimations = () => {
    [faders, slider_right, slider_left].forEach((elements) => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
          element.classList.add("visible");
        } else {
          appearOnScroll.observe(element);
        }
      });
    });
  };

  // Observe elements
  faders.forEach((fader) => appearOnScroll.observe(fader));
  slider_right.forEach((slider) => appearOnScroll.observe(slider));
  slider_left.forEach((slider) => appearOnScroll.observe(slider));

  // Trigger initial animations
  triggerInitialAnimations();
});
