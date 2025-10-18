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
          }, 300); // Задержка должна совпадать с длительностью анимации offcanvas
        }
      });
    });
  }

  // Код для кнопки "Наверх" с анимацией
  const backToTop = document.getElementById("back-to-top");
  
  if (!backToTop) {
    console.error("Элемент #back-to-top не найден!");
    return;
  }

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});