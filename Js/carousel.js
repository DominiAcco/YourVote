document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards1");
  const prevBtn = document.getElementById("btn-left");
  const nextBtn = document.getElementById("btn-right");
  const cards = Array.from(container.children);
  const cardWidth = cards[0].offsetWidth + 20; // inclui margem

  let currentIndex = 0;

  function scrollToCard(index) {
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;
    currentIndex = index;

    container.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth",
    });

    highlightCard(currentIndex);
  }

  function highlightCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("in-view", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    scrollToCard(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    scrollToCard(currentIndex + 1);
  });

  // Auto rolagem
  setInterval(() => {
    const next = (currentIndex + 1) % cards.length;
    scrollToCard(next);
  }, 4000);

  // Inicialização
  scrollToCard(0);
});
