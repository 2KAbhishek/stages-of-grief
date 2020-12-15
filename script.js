let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    makeInactive();
    panel.classList.add("active");
  });
});

console.log("Tiny Web");
