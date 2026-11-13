/* =====================
   Now Playing views
   Cover / Lyrics / Queue
   ===================== */
const npButtons = document.querySelectorAll("[data-np-view]");
const npViews = document.querySelectorAll("[data-np-panel]");

const showNpView = (name) => {
  npViews.forEach((panel) => {
    panel.hidden = panel.dataset.npPanel !== name;
  });
  npButtons.forEach((button) => {
    const isActive = button.dataset.npView === name;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

npButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.classList.contains("is-active") ? "cover" : button.dataset.npView;
    showNpView(next);
  });
});
