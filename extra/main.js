const input = document.createElement("input");
const text = document.createElement("p");
input.type = "text";

let timeOut

input.addEventListener("input", () => {
  clearTimeout(timeOut)
  timeOut = setTimeout(() => {
    text.textContent = input.value;
  }, 300);
});

document.body.append(input, text);
