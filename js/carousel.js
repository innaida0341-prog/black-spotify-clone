/* =====================
   Carousel arrows
   Scrolls each card row left / right
   ===================== */
document.querySelectorAll(".section").forEach((section) => {
  const row = section.querySelector(".card-row");
  const prev = section.querySelector('[data-carousel="prev"]');
  const next = section.querySelector('[data-carousel="next"]');
  if (!row || !prev || !next) return;

  const updateButtons = () => {
    prev.disabled = row.scrollLeft <= 0;
    next.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1;
  };

  const scrollRow = (direction) => {
    row.scrollBy({ left: direction * row.clientWidth * 0.9, behavior: "smooth" });
  };

  prev.addEventListener("click", () => scrollRow(-1));
  next.addEventListener("click", () => scrollRow(1));
  row.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons();
});
