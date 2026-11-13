/* =====================
   Now Playing views
   Switches between cover, lyrics and queue
   ===================== */
const npViews = document.querySelectorAll("[data-view]");
const npTools = document.querySelectorAll("[data-view-target]");

const showView = (name) => {
  npViews.forEach((view) => {
    view.hidden = view.dataset.view !== name;
  });
  npTools.forEach((tool) => {
    const isActive = tool.dataset.viewTarget === name;
    tool.classList.toggle("is-active", isActive);
    tool.setAttribute("aria-pressed", String(isActive));
  });
};

npTools.forEach((tool) => {
  tool.addEventListener("click", () => {
    const target = tool.dataset.viewTarget;
    showView(tool.classList.contains("is-active") ? "cover" : target);
  });
});

// Queue rows: handle toggles the red "Remove" action
document.querySelectorAll(".queue__handle").forEach((handle) => {
  handle.addEventListener("click", () => {
    handle.closest(".queue__row").classList.toggle("is-swiped");
  });
});

document.querySelectorAll(".queue__remove").forEach((button) => {
  button.addEventListener("click", () => button.closest(".queue__row").remove());
});
