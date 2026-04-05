const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollToNext = document.querySelector("a[href='#service-block']");

  const sections = [
    ...document.querySelectorAll(
      "#service-block, #portfolio, #calc, #command, #connect",
    ),
  ];

  const handleMenu = (e) => {
    menu.classList.toggle("active-menu");
  };

  const animateScroll = (el) => {
    const target = sections.find(
      (section) => el.hash.slice(1) === section.id,
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  scrollToNext.addEventListener("click", (e) => {
    e.preventDefault();
    animateScroll(scrollToNext)
  });

  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();

      handleMenu();
      animateScroll(item)
    }),
  );
};

export default menu;
