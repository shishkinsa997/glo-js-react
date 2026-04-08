const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = sliderBlock.querySelectorAll(".portfolio-item");
  const dots = sliderBlock.querySelector(".portfolio-dots");
  const timeInterval = 2000;

  const dot = document.createElement("li");
  dot.classList.add("dot");
  slides.forEach(() => {
    dots.append(dot.cloneNode());
  })

  const dotNodes = [...dots.childNodes].filter((node) => node.nodeName === "LI")
  dotNodes[0].classList.add("dot-active");

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };
  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dotNodes, currentSlide, "dot-active");
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dotNodes, currentSlide, "dot-active");
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(".dot, .portfolio-btn")) {
      return;
    }
    
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dotNodes, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      dotNodes.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dotNodes, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (!e.target.matches(".dot, .portfolio-btn")) {
        return;
      }
      stopSlide();
    },
    true,
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (!e.target.matches(".dot, .portfolio-btn")) {
        return;
      }
      startSlide(timeInterval);
    },
    true,
  );

  startSlide(timeInterval);
};

export default slider;
