document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".back__to_btn_img");

  btn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }

    const contents = document.querySelectorAll(".js-fadeIn");

    contents.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;

      if (elementTop < windowHeight && elementBottom >= 0) {
        el.classList.add("is-scrollIn");
      }
    });
  });
});
