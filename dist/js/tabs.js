const tabs = [
  // Чистка
  {
    id: "priceOne",
    label: "Чистка",
    active: true,
    services: [
      { 
        image: "../src/assets/img/price/3.jpg", 
        title: "Комбинированная чистка", 
        price: 2400,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/3.jpg", 
        title: "Атравматичная чистка", 
        price: 2600,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/3.jpg", 
        title: "Ультразвуковая чистка", 
        price: 2000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/3.jpg", 
        title: "Лечебная чистка", 
        price: 3000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/3.jpg", 
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
        image: "../src/assets/img/price/6.jpg", 
        title: "Франкционная мезотерапия", 
        price: "От 2200",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/6.jpg", 
        title: "Жидкий лазер", 
        price: 4500 ,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/6.jpg", 
        title: "Мезопил", 
        price: 3000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/6.jpg", 
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
        image: "../src/assets/img/price/7.jpg", 
        title: "Массаж классический", 
        price: 900 ,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/7.jpg", 
        title: "Антивозрастная трилогия", 
        price: "От 1900" ,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/7.jpg", 
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
        image: "../src/assets/img/price/8.jpg", 
        title: "Коллагеностимуляция", 
        price: 2800 ,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/8.jpg", 
        title: "Липидотерапия", 
        price: 2800,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/8.jpg", 
        title: "Мышечная-ботокс маска", 
        price: 2800 ,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/8.jpg", 
        title: "Фарфоровая куколка с Карбокс терапия", 
        price: 2300,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/8.jpg", 
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
        image: "../src/assets/img/price/2.jpg", 
        title: "Пилинг Азелаиновый", 
        price: 1800,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Пилипнг салициловый", 
        price: "От 1800",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Пилипнг ТРИ-актив", 
        price: 1800,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Пилинг миндальный", 
        price: 1800,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Гликолевый пилинг", 
        price: 1800,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Феруловый пилинг", 
        price: "От 1800",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Ретиноловый Россия", 
        price: 2700,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Ретиноловый Испанский", 
        price: 3500,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Пилинг Джесснера", 
        price: "От 2500",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "PRXT-33", 
        price: 4000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Ботопилинг BTX", 
        price: 3000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Карбокситерапия обычная", 
        price: 1800,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Лечебный пилинг", 
        price: "От 2000",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "TCA 15%-25%", 
        price: 3000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/2.jpg", 
        title: "Cross-TCA", 
        price: "От 2000",
        link: "#"
      },
            { 
        image: "../src/assets/img/price/2.jpg", 
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
        image: "../src/assets/img/price/1.jpg", 
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
        image: "../src/assets/img/price/5.jpg", 
        title: "Фонофорез", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/5.jpg", 
        title: "РФ-лифтинг", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/5.jpg", 
        title: "Микротоковая терапия", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/5.jpg", 
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
        image: "../src/assets/img/price/10.jpg", 
        title: "Кавитация", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "Лазерный липолиз", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "Вакуумный РФ", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "РФ-лифтинг", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "Биофотон", 
        price: 1000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "Криотерапия", 
        price: 1000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "Миостимуляция", 
        price: 700,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
        title: "Комплекс из двух процедур", 
        price: 1400,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/10.jpg", 
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
        image: "../src/assets/img/price/9.jpg", 
        title: "Реви АЙ", 
        price: 12000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Anti-Dark для переорбитальной зоны", 
        price: 3500,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Биоревитализант Bioplastica", 
        price: 9500,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Каталистин", 
        price: "От 4000",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Мезотерапия для волос", 
        price: "От 1600",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Анестезия зона", 
        price: 300,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Анестезия лицо", 
        price: 500,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Скинтекс Сенерджи", 
        price: "От 2200",
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Vasis 2 мл", 
        price: 2500,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Витаминный коктейль 2 мл", 
        price: 3000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Витаминный коктейль 4 мл", 
        price: 5000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Реви Силк 2 мл", 
        price: 15000,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Реви Силк 1 мл", 
        price: 1200,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
        title: "Rosalex от купирозы", 
        price: 3500,
        link: "#"
      },
      { 
        image: "../src/assets/img/price/9.jpg", 
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
      col.className = "col-6 col-md-4 col-lg-3";
      col.innerHTML = `
        <div class="card border-0 p-0">
          <div class="card-body p-0">
            <img src="${image}" class="d-block w-100 mb-4 rounded object-fit-cover" alt="${title}">
            <h4 class="mb-2">${title}</h4>
            <p class="mb-3 description"></p>
          </div>
          <div class="card-footer mb-5 bg-transparent d-flex align-items-center justify-content-between border-0 p-0">
            <p class="price-sum mb-0"><b>${price} ₽</b></p>
            <a href="${link}" class="link">Подробнее</a>
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