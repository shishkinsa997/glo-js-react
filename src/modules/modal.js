import { animate } from "./helpers";

const modal = () => {
  const overlay = document.querySelector(".popup");
  const modal = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  overlay.style.opacity = "0";
  modal.style.top = "30%";

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        overlay.style.display = "block";
        overlay.style.opacity = "1";

        return;
      }

      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          overlay.style.opacity = progress;
        },
      });
      overlay.style.display = "block";
    });
  });

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          overlay.style.opacity = 1 - progress;
        },
      });
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    }
  });
};

export default modal;
