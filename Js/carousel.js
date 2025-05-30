document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards1");
  const prevBtn = document.getElementById("btn-left");
  const nextBtn = document.getElementById("btn-right");
  const cards = Array.from(container.children);
  const scrollAmount = cards[0].getBoundingClientRect().width + 20; // largura + margem

  function highlightClosestCard() {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }

      card.classList.remove("in-view");
    });

    if (closestCard) {
      closestCard.classList.add("in-view");
    }
  }

  function centerCard(card) {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const scrollOffset = cardCenter - containerCenter;

    container.scrollBy({
      left: scrollOffset,
      behavior: "smooth"
    });
  }

  function centerClosestCard() {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    if (closestCard) {
      centerCard(closestCard);
    }
  }

  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(centerClosestCard, 500);
  });

  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(centerClosestCard, 500);
  });

  setInterval(() => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 5) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    setTimeout(centerClosestCard, 600);
  }, 3000);

  container.addEventListener("scroll", () => {
    requestAnimationFrame(highlightClosestCard);
  });

  highlightClosestCard();
});
