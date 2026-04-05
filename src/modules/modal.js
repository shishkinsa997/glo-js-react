const modal = () => {
  const overlay = document.querySelector(".popup");
  const modal = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = document.querySelector(".popup-close");

  overlay.style.opacity = "0";
  modal.style.top = "30%";
  console.log(window.innerWidth);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        overlay.style.display = "block";
        overlay.style.opacity = "1";

        return;
      }

      fadeIn(overlay, 300);
      overlay.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.style.opacity = "0";
  });
};

const fadeIn = (el, duration = 1000) => {
  let start = null;
  let startOpacity = 0;

  el.style.opacity = 0;
  el.style.display = "block";

  function step(timestamp) {
    if (!start) start = timestamp;

    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);

    el.style.opacity = startOpacity + (1 - startOpacity) * progress;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
};

export default modal;
