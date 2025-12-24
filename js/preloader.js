window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  const minLoadTime = 1500;
  const pageStartTime = Date.now();

  function hidePreloader() {
    if (!preloader) return;

    preloader.classList.add('loaded');

    // После завершения transition удаляем элемент из DOM
    preloader.addEventListener('transitionend', () => {
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    });
  }

  const elapsedTime = Date.now() - pageStartTime;
  const remainingTime = Math.max(minLoadTime - elapsedTime, 1000);
  setTimeout(hidePreloader, remainingTime);
});