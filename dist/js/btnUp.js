document.addEventListener("DOMContentLoaded", function () {
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