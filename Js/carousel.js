// carousel-scroll.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards1");
  const prevBtn   = document.getElementById("btn-left");
  const nextBtn   = document.getElementById("btn-right");
  const cards     = Array.from(container.children);
  const scrollAmount = cards[0].getBoundingClientRect().width + 20; // card width + margin

  // Destacar card central
  function updateInView() {
    const { left: cLeft, right: cRight } = container.getBoundingClientRect();
    cards.forEach(card => {
      const { left, right } = card.getBoundingClientRect();
      const center = (left + right) / 2;
      card.classList.toggle("in-view", center > cLeft && center < cRight);
    });
  }

  // Scroll manual
  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Auto-scroll
  setInterval(() => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 5) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, 3000);

  // Atualiza destaque ao rolar
  container.addEventListener("scroll", updateInView);
  updateInView();
});
