const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    boxes.forEach((b) => b.classList.remove("active-box"));

    box.classList.add("active-box");
  });
});
