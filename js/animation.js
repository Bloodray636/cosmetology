(function() {
  // Функция для проверки видимости элемента
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }

  // Запуск анимации для одного элемента
  function animateElement(el) {
    const animation = el.dataset.animate || 'fadeInUp';
    const duration = el.dataset.duration || '1s';
    const delay = el.dataset.delay || '0s';

    el.style.setProperty('--animate-duration', duration);
    el.style.setProperty('animation-delay', delay);
    el.classList.add('animate__animated', `animate__${animation}`);
  }

  // Проверяем все элементы при скролле
  function handleScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      if (!el.classList.contains('animate__animated') && isInViewport(el)) {
        animateElement(el);
      }
    });
  }

  // Ждём завершения preloader
  document.addEventListener('preloader:done', () => {
    handleScroll(); // анимация для видимых сразу
    window.addEventListener('scroll', handleScroll);
  });
})();