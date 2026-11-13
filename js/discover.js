/* =====================
   Discover genre tabs
   Marks the clicked tab as active
   ===================== */
const discoverTabs = document.querySelectorAll(".discover-tabs__tab");

discoverTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    discoverTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");
  });
});
