let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    makeInactive();
    panel.classList.add("active");
  });
});

function makeInactive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
