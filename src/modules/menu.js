const menu = () => {
  const main = document.querySelector("main");

  const menu = document.querySelector("menu");
  const scrollToNext = document.querySelector("a[href='#service-block']");

  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "-100%";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  menu.append(overlay);

  const sections = [
    ...document.querySelectorAll(
      "#service-block, #portfolio, #calc, #command, #connect",
    ),
  ];

  const handleMenu = (e) => {
    menu.classList.toggle("active-menu");
  };

  const animateScroll = (el) => {
    const target = sections.find((section) => el.hash.slice(1) === section.id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  main.addEventListener("click", (e) => {
    if (e.target.closest(".menu")) {
      handleMenu();
      return;
    }
    if (e.target.closest("a[href='#service-block']")) {
      e.preventDefault();
      animateScroll(scrollToNext);
    }
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn") || e.target === overlay) {
      handleMenu();
      return;
    }
    if (e.target.matches("ul>li>a")) {
      e.preventDefault();

      handleMenu();
      animateScroll(e.target);
    }
  });
};

export default menu;
