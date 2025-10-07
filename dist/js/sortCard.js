const sortSelect = document.getElementById("sortSelect");

function sortCards(order) {
  const allPanes = document.querySelectorAll("#nav-tabContent .tab-pane");

  allPanes.forEach(pane => {
    const row = pane.querySelector(".row");
    if (!row) return;

    const cols = Array.from(row.querySelectorAll(".col-6"));

    cols.sort((a, b) => {
      const titleA = a.querySelector("h4").innerText.toLowerCase();
      const titleB = b.querySelector("h4").innerText.toLowerCase();

      const priceA = parseFloat(
        (a.querySelector(".price-sum")?.innerText || "0").replace(/[^\d.,]/g, "").replace(",", ".")
      ) || 0;

      const priceB = parseFloat(
        (b.querySelector(".price-sum")?.innerText || "0").replace(/[^\d.,]/g, "").replace(",", ".")
      ) || 0;

      switch (order) {
        case "asc":
          return titleA.localeCompare(titleB, "ru");
        case "desc":
          return titleB.localeCompare(titleA, "ru");
        case "priceAsc":
          return priceA - priceB;
        case "priceDesc":
          return priceB - priceA;
        default:
          return 0;
      }
    });

    // очищаем row и вставляем в нужном порядке
    cols.forEach(col => row.appendChild(col));
  });
}

sortSelect.addEventListener("change", () => {
  const order = sortSelect.value;
  sortCards(order);
});