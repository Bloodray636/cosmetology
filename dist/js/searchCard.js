// глобальный поиск
const searchInput = document.getElementById("searchInput");
const allCards = document.querySelectorAll("#nav-tabContent .card");
const navTabContent = document.getElementById("nav-tabContent");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  if (query) {
    // показываем контейнер поиска, скрываем табы
    navTabContent.classList.add("d-none");
    searchResults.classList.remove("d-none");
    searchResults.innerHTML = ""; // очищаем старые результаты

    // фильтруем карточки
    allCards.forEach(card => {
      const title = card.querySelector("h4").innerText.toLowerCase();
      if (title.includes(query)) {
        // клонируем карточку и вставляем в общий ряд
        const col = card.closest(".col-6").cloneNode(true);
        searchResults.appendChild(col);
      }
    });

    // если ничего не найдено
    if (!searchResults.hasChildNodes()) {
      searchResults.innerHTML = `<p class="text-muted">Ничего не найдено</p>`;
    }

  } else {
    // сброс → возвращаем обычные табы
    navTabContent.classList.remove("d-none");
    searchResults.classList.add("d-none");
    searchResults.innerHTML = "";
  }
});

// сброс поиска при переключении таба
document.querySelectorAll("#nav-tab button").forEach(btn => {
  btn.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
  });
});