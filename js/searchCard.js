const searchInput = document.getElementById("searchInput");
const navTabContent = document.getElementById("nav-tabContent");
const searchResults = document.getElementById("searchResults");

let searchTimeout;

const resetSearch = () => {
  navTabContent.classList.remove("d-none");
  searchResults.classList.add("d-none");
  searchResults.innerHTML = "";
};

const animateCardsAppearance = (cards) => {
  if (!cards || cards.length === 0) return;
  
  cards.forEach((card, index) => {
    // Сбрасываем стили перед анимацией
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    
    // Используем requestAnimationFrame для гарантии отрисовки
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 50);
      });
    });
  });
};

const animateElement = (element) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transform = 'translateY(10px)';
  element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 10);
    });
  });
};

const performSearch = (query) => {
  if (!query) {
    resetSearch();
    return;
  }
  
  const cards = document.querySelectorAll("#nav-tabContent .card");
  navTabContent.classList.add("d-none");
  searchResults.classList.remove("d-none");
  
  if (query.length === 1) {
    searchResults.innerHTML = `
      <div class="col-12 text-center" id="min-chars-message">
        <p class="text-muted mt-4">Введите минимум 2 символа для поиска</p>
      </div>`;
    
    // Анимируем сообщение
    setTimeout(() => {
      const message = document.getElementById("min-chars-message");
      animateElement(message);
    }, 10);
    return;
  }
  
  const results = [...cards].filter(card => {
    const cardText = card.textContent.toLowerCase();
    const titleElement = card.querySelector("h1, h2, h3, h4, h5, h6, .card-title, [data-title]");
    const title = titleElement ? titleElement.textContent.toLowerCase() : cardText.substring(0, 100);
    
    return title.includes(query) || cardText.includes(query);
  });
  
  if (results.length > 0) {
    // Создаем контейнер и добавляем карточки по одной
    const container = document.createElement("div");
    container.className = "row";
    container.id = "animated-results";
    
    results.forEach(card => {
      const parentCol = card.closest("[class*='col-']");
      if (parentCol) {
        const colClone = parentCol.cloneNode(true);
        // Добавляем класс для скрытия перед анимацией
        colClone.classList.add("card-hidden");
        container.appendChild(colClone);
      }
    });
    
    searchResults.innerHTML = "";
    searchResults.appendChild(container);
    
    // Анимируем карточки после отрисовки DOM
    setTimeout(() => {
      const resultCards = document.querySelectorAll("#animated-results [class*='col-']");
      animateCardsAppearance(resultCards);
      
      // Убираем класс после анимации
      resultCards.forEach(card => {
        card.classList.remove("card-hidden");
      });
    }, 10);
    
  } else {
    searchResults.innerHTML = `
      <div class="col-12 text-center" id="no-results-message">
        <p class="text-muted mt-4">По запросу "<strong>${query}</strong>" ничего не найдено</p>
      </div>`;
    
    // Анимируем сообщение "ничего не найдено"
    setTimeout(() => {
      const message = document.getElementById("no-results-message");
      animateElement(message);
    }, 10);
  }
};

searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    performSearch(searchInput.value.toLowerCase().trim());
  }, 300);
});

document.querySelectorAll("#nav-tab button").forEach(btn => {
  btn.addEventListener("click", () => {
    searchInput.value = "";
    resetSearch();
  });
});