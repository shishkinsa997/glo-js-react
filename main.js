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
    `;

    return el;
  };
};

const div = new DomElement(
  (selector = ".block"),
  (height = "100"),
  (width = "100"),
  (bg = "red"),
  (fontSize = "16"),
  (text = "Я красный div"),
).create();

const p = new DomElement(
  (selector = "#best"),
  (height = "50"),
  (width = "150"),
  (bg = "blue"),
  (fontSize = "24"),
  (text = "Я синий p"),
).create();

console.log(div);
console.log(p);

document.body.append(div, p);
