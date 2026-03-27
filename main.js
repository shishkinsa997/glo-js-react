const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.create = function () {
    let el;

    if (this.selector.startsWith(".")) {
      el = document.createElement("div");
      el.classList.add(this.selector.slice(1));
    }
    if (this.selector.startsWith("#")) {
      el = document.createElement("p");
      el.id = this.selector.slice(1);
    }
    el.textContent = text;
    el.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize};
        position: absolute;
        top: 50dvh;
        left: 50dvw;
    `;

    return el;
  };
};

const block = new DomElement(
  (selector = ".block"),
  (height = "100"),
  (width = "100"),
  (bg = "red"),
  (fontSize = "16"),
).create();

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(block);
  document.addEventListener("keydown", (e) => {
    const key = e.key;
    const step = 10

    if (key === "ArrowUp") {
      block.style.top = block.offsetTop - step + "px";
      console.log("^");
    }

    if (key === "ArrowDown") {
      block.style.top = block.offsetTop + step + "px";
      console.log("v");
    }

    if (key === "ArrowLeft") {
      block.style.left = block.offsetLeft - step + "px";
      console.log("<");
    }

    if (key === "ArrowRight") {
      block.style.left = block.offsetLeft + step + "px";
      console.log(">");
    }
  });
  console.log(block.offsetTop);
});
