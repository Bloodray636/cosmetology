const sortSelect = document.getElementById("sortSelect");

// Вспомогательные функции для получения данных
const getCardData = (element) => {
  const titleElement = element.querySelector("h4, h3, h2, h1, h5, h6, .card-title, [data-title]");
  const title = titleElement 
    ? titleElement.innerText.toLowerCase().trim() 
    : element.textContent.substring(0, 50).toLowerCase().trim();

  const priceElement = element.querySelector(".price-сard");
  const priceText = priceElement?.innerText.replace(/[^\d.,]/g, "").replace(",", ".");
  const price = parseFloat(priceText) || 0;

  return { title, price };
};

// Функция сравнения с учетом локали
const compareBy = (order, a, b) => {
  switch (order) {
    case "asc": return a.title.localeCompare(b.title, "ru");
    case "desc": return b.title.localeCompare(a.title, "ru");
    case "priceAsc": return a.price - b.price;
    case "priceDesc": return b.price - a.price;
    default: return 0;
  }
};

// Основная функция сортировки
const sortCards = (order) => {
  const panes = document.querySelectorAll("#nav-tabContent .tab-pane");

  panes.forEach(pane => {
    const row = pane.querySelector(".row");
    if (!row) return;

    const cols = Array.from(row.querySelectorAll('[class*="col-"]'));
    if (cols.length === 0) return;

    // Получаем данные и сортируем
    const sortedCols = cols
      .map(col => ({ element: col, ...getCardData(col) }))
      .sort((a, b) => compareBy(order, a, b))
      .map(item => item.element);

    // Оптимизированная перестановка элементов
    row.append(...sortedCols);
  });
};

// Инициализация
if (sortSelect) {
  sortSelect.addEventListener("change", () => sortCards(sortSelect.value));
}