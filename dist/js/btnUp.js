document.addEventListener("DOMContentLoaded", function () {
  // Обработка якорных ссылок в мобильном меню
  const offcanvasElement = document.getElementById('offcanvasNavbar');
  
  if (offcanvasElement) {
    const anchorLinks = offcanvasElement.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Закрываем offcanvas
          const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
          if (offcanvas) {
            offcanvas.hide();
          }
          
          // Ждем завершения анимации закрытия меню, затем скроллим
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 300);
        }
      });
    });
  }

  // Код для кнопки "Наверх" с прогрессом рамки
  const backToTop = document.getElementById("back-to-top");
  
  if (!backToTop) {
    console.error("Элемент #back-to-top не найден!");
    return;
  }

  function updateProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollTop / docHeight, 1);
    
    // Показываем/скрываем кнопку
    if (scrollTop > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    
    // Плавное заполнение рамки (от 0 до 360 градусов)
    const progress = scrollPercent * 360;
    backToTop.style.setProperty('--progress', `${progress}deg`);
  }

  // Слушаем скролл и обновляем прогресс
  window.addEventListener("scroll", updateProgress);
  
  // Инициализируем прогресс при загрузке
  updateProgress();

  // Обработчик клика по кнопке
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});