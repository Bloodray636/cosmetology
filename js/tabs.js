const tabs = [
  // Чистка
  {
    id: "priceOne",
    label: "Чистка",
    active: true,
    services: [
      { 
        image: "./assets/img/price/3.jpg", 
        title: "Комбинированная чистка", 
        price: 2400,
        link: "#"
      },
      { 
        image: "./assets/img/price/3.jpg", 
        title: "Атравматичная чистка", 
        price: 2600,
        link: "#"
      },
      { 
        image: "./assets/img/price/3.jpg", 
        title: "Ультразвуковая чистка", 
        price: 2000,
        link: "#"
      },
      { 
        image: "./assets/img/price/3.jpg", 
        title: "Лечебная чистка", 
        price: 3000,
        link: "#"
      },
      { 
        image: "./assets/img/price/3.jpg", 
        title: "Чистка спины", 
        price: "От 3000",
        link: "#"
      }
    ]
  },
  // Фракционная
  {
    id: "priceTwo",
    label: "Фракционная",
    active: false,
    services: [
      { 
        image: "./assets/img/price/6.jpg", 
        title: "Франкционная мезотерапия", 
        price: "От 2200",
        link: "#"
      },
      { 
        image: "./assets/img/price/6.jpg", 
        title: "Жидкий лазер", 
        price: 4500 ,
        link: "#"
      },
      { 
        image: "./assets/img/price/6.jpg", 
        title: "Мезопил", 
        price: 3000,
        link: "#"
      },
      { 
        image: "./assets/img/price/6.jpg", 
        title: "Фракционная + Карбокси", 
        price: 3000,
        link: "#"
      },
    ]
  },
  // Массаж
  {
    id: "priceThree",
    label: "Массаж",
    active: false,
    services: [
      { 
        image: "./assets/img/price/7.jpg", 
        title: "Массаж классический", 
        price: 900 ,
        link: "#"
      },
      { 
        image: "./assets/img/price/7.jpg", 
        title: "Антивозрастная трилогия", 
        price: "От 1900" ,
        link: "#"
      },
      { 
        image: "./assets/img/price/7.jpg", 
        title: "Скульптурно-моделирующая пластика", 
        price: 1800 ,
        link: "#"
      }
    ]
  },
  // Уход
  {
    id: "priceFour",
    label: "Уход",
    active: false,
    services: [
      { 
        image: "./assets/img/price/8.jpg", 
        title: "Коллагеностимуляция", 
        price: 2800 ,
        link: "#"
      },
      { 
        image: "./assets/img/price/8.jpg", 
        title: "Липидотерапия", 
        price: 2800,
        link: "#"
      },
      { 
        image: "./assets/img/price/8.jpg", 
        title: "Мышечная-ботокс маска", 
        price: 2800 ,
        link: "#"
      },
      { 
        image: "./assets/img/price/8.jpg", 
        title: "Фарфоровая куколка с Карбокс терапия", 
        price: 2300,
        link: "#"
      },
      { 
        image: "./assets/img/price/8.jpg", 
        title: "Биоплазма", 
        price: 2800,
        link: "#"
      },
    ]
  },
  // Пилинги
  {
    id: "priceFive",
    label: "Пилинги",
    active: false,
    services: [
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Пилинг Азелаиновый", 
        price: 1800,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Пилипнг салициловый", 
        price: "От 1800",
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Пилипнг ТРИ-актив", 
        price: 1800,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Пилинг миндальный", 
        price: 1800,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Гликолевый пилинг", 
        price: 1800,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Феруловый пилинг", 
        price: "От 1800",
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Ретиноловый Россия", 
        price: 2700,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Ретиноловый Испанский", 
        price: 3500,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Пилинг Джесснера", 
        price: "От 2500",
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "PRXT-33", 
        price: 4000,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Ботопилинг BTX", 
        price: 3000,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Карбокситерапия обычная", 
        price: 1800,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Лечебный пилинг", 
        price: "От 2000",
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "TCA 15%-25%", 
        price: 3000,
        link: "#"
      },
      { 
        image: "./assets/img/price/2.jpg", 
        title: "Cross-TCA", 
        price: "От 2000",
        link: "#"
      },
            { 
        image: "./assets/img/price/2.jpg", 
        title: "Химическая шлифовка", 
        price: "От 2000",
        link: "#"
      }
    ]
  },
  // Папиломы
  {
    id: "priceSix",
    label: "Папиломы",
    active: false,
    services: [
      { 
        image: "./assets/img/price/1.jpg", 
        title: "Удаление папиллом", 
        price: "От 200" ,
        link: "#"
      }
    ]
  },
  // Аппаратные процедуры по лицу
  {
    id: "priceEight",
    label: "Аппаратные процедуры по лицу",
    active: false,
    services: [
      { 
        image: "./assets/img/price/5.jpg", 
        title: "Фонофорез", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/5.jpg", 
        title: "РФ-лифтинг", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/5.jpg", 
        title: "Микротоковая терапия", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/5.jpg", 
        title: "КУРС РФ-лифтинга/Фонорез/Микротоки", 
        price: 10000,
        link: "#"
      },
    ]
  },
  // Аппаратные процедуры по телу
  {
    id: "priceNine",
    label: "Аппаратные процедуры по телу",
    active: false,
    services: [
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Кавитация", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Лазерный липолиз", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Вакуумный РФ", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "РФ-лифтинг", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Биофотон", 
        price: 1000,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Криотерапия", 
        price: 1000,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Миостимуляция", 
        price: 700,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Комплекс из двух процедур", 
        price: 1400,
        link: "#"
      },
      { 
        image: "./assets/img/price/10.jpg", 
        title: "Комплекс из трех процедур", 
        price: 1700,
        link: "#"
      }
    ]
  },
   // Инъекционные процедуры
  {
    id: "priceTen",
    label: "Инъекционные процедуры",
    active: false,
    services: [
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Реви АЙ", 
        price: 12000,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Anti-Dark для переорбитальной зоны", 
        price: 3500,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Биоревитализант Bioplastica", 
        price: 9500,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Каталистин", 
        price: "От 4000",
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Мезотерапия для волос", 
        price: "От 1600",
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Анестезия зона", 
        price: 300,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Анестезия лицо", 
        price: 500,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Скинтекс Сенерджи", 
        price: "От 2200",
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Vasis 2 мл", 
        price: 2500,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Витаминный коктейль 2 мл", 
        price: 3000,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Витаминный коктейль 4 мл", 
        price: 5000,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Реви Силк 2 мл", 
        price: 15000,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Реви Силк 1 мл", 
        price: 1200,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Rosalex от купирозы", 
        price: 3500,
        link: "#"
      },
      { 
        image: "./assets/img/price/9.jpg", 
        title: "Липолитики VEC", 
        price: 4000,
        link: "#"
      }
    ]
  },
  // Акции
  {
    id:"priceEleven",
    label:"Акции",
    active:false,
    extraClass:"bg-danger",
    services:[]
  }
];

const nav = document.getElementById("nav-tab");
const content = document.getElementById("nav-tabContent");

tabs.forEach(tab => {
  // кнопка таба
  const btn = document.createElement("button");
  btn.className = `btn btn-tabs${tab.active ? " active" : ""}${tab.extraClass ? " " + tab.extraClass : ""}`;
  Object.assign(btn, { id: `${tab.id}-tab`, type: "button", innerText: tab.label });
  btn.setAttribute("role", "tab");
  btn.setAttribute("data-bs-toggle", "tab");
  btn.setAttribute("data-bs-target", `#${tab.id}`);
  btn.setAttribute("aria-controls", tab.id);
  btn.setAttribute("aria-selected", tab.active ? "true" : "false");
  nav.appendChild(btn);

  // панель таба
  const pane = document.createElement("div");
  pane.className = `tab-pane fade${tab.active ? " show active" : ""}`;
  Object.assign(pane, { id: tab.id, tabIndex: 0 });
  pane.setAttribute("role", "tabpanel");
  pane.setAttribute("aria-labelledby", `${tab.id}-tab`);

  if (tab.services.length) {
    const row = document.createElement("div");
    row.className = "row";

    tab.services.forEach(({ image, title, price, link }) => {
      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-5";
      col.innerHTML = `
        <div class="card h-100 border-0 p-0 p-3">
          <div class="card-body p-0">
            <img src="${image}" class="d-block w-100 object-fit-cover mb-4" alt="${title}" loading="lazy">
            <h5 class="mb-0">${title}</h5>
            <h4 class="text-center d-flex align-items-center justify-content-center my-4 price-сard">
              <svg class="me-1" id="Layer_1" enable-background="new 0 0 512.5 512.5" viewBox="0 0 512.5 512.5" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="m246.985 195.833c0-8.284-6.716-15-15-15s-15 6.716-15 15v12.12c-7.127 1.696-13.652 4.69-19.073 8.837-10.786 8.252-16.797 20.672-16.925 34.975-.289 32.329 28.716 42.573 42.656 47.496.443.156 31.427 12.274 31.341 21.893-.131 14.649-15.481 15.705-20.148 15.699-8.77-.04-22.683-4.264-22.683-15.431 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 23.3 17.059 38.15 36.833 43.347v13.075c0 8.284 6.716 15 15 15s15-6.716 15-15v-12.612c7.126-1.696 13.651-4.69 19.072-8.837 10.786-8.251 16.797-20.671 16.925-34.974.133-14.831-5.914-26.805-17.973-35.59-8.973-6.537-35.781-15.736-35.938-15.786-17.179-6.364-20.15-10.815-20.086-18.013.13-14.518 15.177-15.7 20.017-15.7.044 0 .089.001.131.001 8.77.039 22.683 4.263 22.683 15.431 0 8.284 6.716 15 15 15s15-6.716 15-15c0-23.299-17.058-38.149-36.832-43.347z"/>
                  <path d="m434.384 7.696c-4.255-7.107-13.464-9.422-20.574-5.166l-12.238 7.326c-30.623 18.33-66.139 19.006-97.436 1.854l-9.914-5.433c-7.706-4.223-15.724-6.277-24.512-6.277h-1.723c-13.836 0-26.316 5.176-36.093 14.968-9.045 9.059-14.126 20.43-14.819 33.039l-133.96 82.548c-4.432 2.731-7.131 7.564-7.131 12.771v324.174c0 24.813 20.187 45 45 45h224.001c24.813 0 45-20.187 45-45v-324.175c0-5.206-2.699-10.039-7.131-12.771l-135.536-83.518c.711-4.134 2.597-7.658 5.807-10.873 4.198-4.205 8.921-6.163 14.862-6.163h1.723c3.819 0 6.743.749 10.093 2.585l9.915 5.434c19.714 10.804 40.7 16.192 61.641 16.19 22.482-.001 44.912-6.216 65.621-18.612l12.238-7.326c7.108-4.255 9.421-13.467 5.166-20.575zm-89.4 474.804h-224c-8.271 0-15-6.729-15-15v-16.668h254v16.668c0 8.271-6.728 15-15 15zm15-61.668h-254v-269.131l111.051-68.431.06 38.361c-7.391.931-13.111 7.225-13.111 14.868 0 8.284 6.716 15 15 15h28c8.284 0 15-6.716 15-15 0-8.247-6.657-14.934-14.889-14.994l-.061-39.405 112.951 69.602v269.13z"/>
                </g>
              </svg>
              ${price} ₽
            <h4>
          </div>
          <div class="card-footer mb-0 border-0">
            <a href="#">
              <button class="btn w-100 mb-3">Записаться</button>
            </a>
            <a href="${link}">
              <button class="btn btn-secondary w-100">Подробнее</button>
            </a>
          </div>
        </div>
      `;
      row.appendChild(col);
    });

    pane.appendChild(row);
  } else {
    pane.innerHTML = '<p class="text-muted mb-4">Нет услуг в этом разделе</p>';
  }

  content.appendChild(pane);
});