const slider = (
  sliderBlockClass = "slider-block",
  slidesClass = "slider-item",
  dotsClass = "slider-dots",
  activeSlideClass = "slide-active",
  activeDotClass = "dot-active",
  buttonClass = "slider-btn",
  leftArrowId = "arrow-left",
  rightArrowId = "arrow-right",
  timeInterval = 2000,
) => {
  try {
    const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
    const slides = sliderBlock.querySelectorAll(`.${slidesClass}`);
    const dots = sliderBlock.querySelector(`.${dotsClass}`);
    const sliderButtons = sliderBlock.querySelectorAll(`.${buttonClass}`);

    const leftArrow = sliderBlock.querySelector(`#${leftArrowId}`);
    const rightArrow = sliderBlock.querySelector(`#${rightArrowId}`);
    if (
      !sliderBlock ||
      slides.length === 0 ||
      !dots ||
      sliderButtons.length === 0 ||
      !leftArrow ||
      !rightArrow
    ) {
      throw new Error("Slider elements not found");
    }
  } catch (error) {
    console.error("Slider error:", error.message);
    return;
  }
  const sliderBlock = document.querySelector(`.${sliderBlockClass}`);
  const slides = sliderBlock.querySelectorAll(`.${slidesClass}`);
  const dots = sliderBlock.querySelector(`.${dotsClass}`);

  const dot = document.createElement("li");
  dot.classList.add("dot");
  slides.forEach(() => {
    dots.append(dot.cloneNode());
  });

  const dotNodes = [...dots.childNodes].filter(
    (node) => node.nodeName === "LI",
  );
  dotNodes[0].classList.add(activeDotClass);

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };
  const autoSlide = () => {
    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dotNodes, currentSlide, activeDotClass);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dotNodes, currentSlide, activeDotClass);
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches(`.dot, .${buttonClass}`)) {
      return;
    }

    prevSlide(slides, currentSlide, activeSlideClass);
    prevSlide(dotNodes, currentSlide, activeDotClass);

    if (e.target.matches(`#${rightArrowId}`)) {
      currentSlide++;
    } else if (e.target.matches(`#${leftArrowId}`)) {
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

    nextSlide(slides, currentSlide, activeSlideClass);
    nextSlide(dotNodes, currentSlide, activeDotClass);
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (!e.target.matches(`.dot, .${buttonClass}`)) {
        return;
      }
      stopSlide();
    },
    true,
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (!e.target.matches(`.dot, .${buttonClass}`)) {
        return;
      }
      startSlide(timeInterval);
    },
    true,
  );

  startSlide(timeInterval);
};

export default slider;
