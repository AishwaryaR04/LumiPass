const travellerType = document.getElementById("travellerType");
const cards = document.querySelectorAll(".card");

travellerType.addEventListener("change", () => {
  const value = travellerType.value;

  cards.forEach(card => {
    const tags = card.getAttribute("data-tags");
    if (value === "all" || tags.includes(value) || tags.includes("everyone")) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// Scroll buttons
const cardContainer = document.getElementById("cardContainer");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
  cardContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

scrollRightBtn.addEventListener("click", () => {
  cardContainer.scrollBy({ left: 300, behavior: 'smooth' });
});
